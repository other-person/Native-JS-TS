  type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: "Tarik",
        age: 34,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Botanicheskaya street"
            }
        }
    }
})

  // деструктуризация функции
test("", () => {
    let props = {
        name: "Tarik",
        age: 34,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Botanicheskaya street"
            }
        }
    }
    // const age = props.age;
    // const lessons = props.lessons;  // можно так

    const a = props.age;
    const l = props.lessons;  // можно и так

    let {age, lessons} = props;  //  и так
    const {title} = props.address.street // можно и так создавать


    expect(age).toBe(34)
    expect(lessons.length).toBe(2)
    expect(a).toBe(34)
    expect(l.length).toBe(2)
    expect(title).toBe("Botanicheskaya street")

})

  // деструктуризация массива

  test("", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1,ls2] = props.lessons
    expect(l2.title).toBe("2")


      })
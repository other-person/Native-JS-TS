import {user} from "./09";

type UserType = {
    name: string
    age: number
    address: {title: string}
};

function incrementAge(u: UserType) {
    u.age = u.age + 1;

}

test("Big test ", () => {

    let user: UserType = {
        name: "Tarik",
        age: 34,
        address: {title: "Minsk"}
    }

    incrementAge(user)
    expect(user.age).toBe(35);

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)
});

test("Array test ", () => {

    let users = [
        {
            name: "Tarik",
            age: 34
        },
        {
            name: "Taras",
            age: 33
        }
    ]

    let admins = users;

    admins.push({name: "Bandugan", age: 10})

   expect(users[2]).toEqual({name: "Bandugan", age: 10})
});

test("Value type test ", () => {

    let usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = adminsCount +1;
    expect(adminsCount).toEqual(101)

});

test("reference type text", () => {

    const address = {title: "Minsk"}

    let user: UserType = {
        name: "Tarik",
        age: 34,
        address: address
    }

   // let addr = user.address

    let user2: UserType ={
        name: "Natasha",
        age: 30,
        address: address
    }

    address.title = "MinskCity"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("MinskCity")
})

test("reference type text", () => {

    const address = {title: "Minsk"}

    let user: UserType = {
        name: "Tarik",
        age: 34,
        address: address
    }

    let user2: UserType ={
        name: "Natasha",
        age: 30,
        address: address
    }

    let users = [user, user2, {name: 'Misha', age: 10}]

    let admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")

})

test("sort array text", () => {

    let letters = ['i','z','b','c','a'];

   letters.sort();

    expect(letters).toEqual(['a','b','c','i','z'])

})
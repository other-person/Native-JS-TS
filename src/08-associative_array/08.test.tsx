import {usersObj} from "./08";

type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
     users  = {
        "101": {id: 101, name: "Dimych"},
        "1231": {id: 1231, name: "Natasha"},
        "213": {id: 213, name: "Sasha"},
        "1": {id: 324, name: "Katia"}
    };
});

    // Добавлние юзера
test("should update corresponding user", () => {

    users['1'].name = "Ekaterina"

    expect(users['1'].name).toBe("Ekaterina")

    // ещё вариант написания теста

    expect(users['1']).toEqual({id : 324, name: "Ekaterina"})

});

    // Удаление юзера
test("should delete corresponding user", () => {

    delete users['1']

    expect(users['1']).toBeUndefined()

});

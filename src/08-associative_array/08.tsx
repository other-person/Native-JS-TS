
export const usersObj = {
    "0":"Dimych",
    "1":"Natasha",
    "2":"Sasha",
    "3":"Katia"
};

type UsersType = {
    [key: string]:{id: number, name: string}
}

export const users: UsersType = {
    "101":{id: 101, name: "Dimych"},
    "1231":{id: 1231, name: "Natasha"},
    "213":{id: 213, name: "Sasha"},
    "1":{id: 324, name: "Katia"}
};

let user = {id: 100500, name: "Igor"};
users[user.id] = user;  // обавление пользователя в обект
delete users[user.id]//удаление пользователя из объекта

const userArray = [
    {id: 101, name: "Dimych"},
    {id: 1231, name: "Natasha"},
    {id: 213, name: "Sasha"},
    {id: 1, name: "Katia"}
];

//----ДОБАВЛЕНИЕ ИММУТАБЕЛЬНО----

// userArray = find(u=>u.id ! === 1) поиск элемента в масиве


// let userCopy = [...userArray.filter().user] добавление в массив при помощи отфильтрации
// и спред оператора


// let userArray = userArray.filter(u => u.id !== user.id) удаление происходит
// при поможи отфтльтрации массива тех, которые должны остаться, а которые не должны,
// те не вносятся
import React from "react";

export type peopleType = {name: string,
                   age: number }

const peoples: Array<peopleType> = [
    { name: "Andrey Vorobey", age: 30 },
    { name: "Sergei Pupkin", age: 45 },
    { name: "Ann Falinova", age: 20 },

]
// мы убрали ретурн. Что бы компилятор не ругался, поместили
// фигурные скобки в круглые

const transformator = (man: peopleType ) =>({
    stack: ['Html','Js', 'Css','Tdd', 'React'],
    firstName: [man.name.split(" ")[0]],
    lastName: [man.name.split(" ")[1]]
})

const devs = [
    {
        stack: ['Html','Js', 'Css','Tdd', 'React'],
        firstName:  "Andrey",
        lastName: "Vorobey"
    },
    {
        stack: ['Html','Js', 'Css','Tdd', 'React'],
        firstName:  "Sergei",
        lastName: "Pupkin"
    },
    {
        stack: ['Html','Js', 'Css','Tdd', 'React'],
        firstName:  "Ann ",
        lastName: "Falinova"
    }
]

///Это аналогичная запись переменной dev

let d1 = transformator(peoples[0]);
let d2 = transformator(peoples[1]);
let d3 = transformator(peoples[2]);

const dev2 = [
    d1, d2, d3
];
//Это другая, но аналогичная запись переменной dev
const dev3 = peoples.map(transformator);

//Это другая, но аналогичная запись переменной dev
const dev4 = peoples.map(man =>({
    stack: ['Html', 'Js', 'Css', 'Tdd', 'React'],
    firstName: [man.name.split(" ")[0]],
    lastName: [man.name.split(" ")[1]]
}))

/*const message = peoples.map(man => `Hello ${man.name.split(" ")[0] }
                    .Welcome in It-Inkubator`)*/

export const createGreetingMessage = (peoples: Array<peopleType>) => {
    return peoples.map(man => `Hello ${man.name.split(" ")[0]}.Welcome in It-Inkubator`)
}

import {createGreetingMessage, peopleType} from "./05";

let peoples: Array<peopleType> = [];

beforeEach ( ()=> {

    peoples = [
    { name: "Andrey Vorobey", age: 30 },
    { name: "Sergei Pupkin", age: 45 },
    { name: "Ann Falinova", age: 20 }
]
})

test ("shout get array of gritting messages",()=> {

    const message = createGreetingMessage(peoples);

    expect(message.length).toBe(3);
    expect(message[0]).toBe(`Hello Andrey.Welcome in It-Inkubator`);
    expect(message[1]).toBe(`Hello Sergei.Welcome in It-Inkubator`);
    expect(message[2]).toBe(`Hello Ann.Welcome in It-Inkubator`);
})




import { Sum,SplitInToWords,Mult} from "./01";

//Пишем исходные данные. Выносим их за пределы, что ыб не было дублирования кода.
// Создаём коллбек функцию, для того, что бы не перезатирались значения a,b,c
// если им присвоим значение в ходе текста
let a: number;
let b: number;
let c: number;

beforeEach( ()=>{
    a = 1;
    b = 2;
    c = 3;
})

// Пишем название функции и саму функцию
test ("sum should be correct",()=>{

// Вызываем функцию sum
    const result1 = Sum (a,b);
    const result2 = Sum (b,c);

// Ожидаемый результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test ("multiply should be correct",()=>{

// Вызываем функцию sum
    const result1 = Mult (a,b);
    const result2 = Mult (b,c);
// ожидаем результат

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test ("splitting into words should bee correct", ()=>{

    const sent1 = "Hello my friend!";
    const sent2 = "JS - the   best programming language";

    const result1 = SplitInToWords(sent1);
    const result2 = SplitInToWords(sent2);

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")
})

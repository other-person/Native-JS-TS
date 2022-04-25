import React from "react";


test("should take man older then 90 ears old",() => {

    const ages = [2,22,66,74,89,100,90,1];


    const oldAges = ages.filter(age => age > 90);

    expect (oldAges.length).toBe(1);
    expect (oldAges[0]).toBe(100);

})

test("should take chipper courses < 160 ",() => {

    type chipCoursesType = {title: string,
        price: number}

    const courses =  [
        {title: "Html", price: 110 },
        {title: "Css", price: 200 },
        {title: "Js", price: 150 }
    ]

    const chipCourses = courses.filter(course => course.price < 160);

    expect (chipCourses.length).toBe(2);
    expect (chipCourses[0].title).toBe("Html");
    expect (chipCourses[1].title).toBe("Js");

})

test("Get only complited tasks", () => {
const tasks = [
    {id:1, title: "Bread",isDone: true},
    {id:2, title: "Milk",isDone: false},
    {id:3, title: "Potato",isDone: true},
    {id:4, title: "Salt",isDone: true},
    {id:5, title: "Toast",isDone: false},
    {id:6, title: "Tomato",isDone: false}
    ]

    const complitedTasks = tasks.filter(t => t.isDone)

    expect (complitedTasks.length).toBe(3);
    expect (complitedTasks[0].id).toBe(1);
    expect (complitedTasks[1].id).toBe(3);
    expect (complitedTasks[2].id).toBe(4);

})

test("Get only uncomplited tasks", () => {
    const tasks = [
        {id:1, title: "Bread",isDone: true},
        {id:2, title: "Milk",isDone: false},
        {id:3, title: "Potato",isDone: true},
        {id:4, title: "Salt",isDone: true},
        {id:5, title: "Toast",isDone: false},
        {id:6, title: "Tomato",isDone: false}
    ]

    const uncomplitedTasks = tasks.filter(t => !t.isDone)

    expect (uncomplitedTasks.length).toBe(3);
    expect (uncomplitedTasks[0].id).toBe(2);
    expect (uncomplitedTasks[1].id).toBe(5);
    expect (uncomplitedTasks[2].id).toBe(6);

})
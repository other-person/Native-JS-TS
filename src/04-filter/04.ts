import React from "react";


const ages = [2,22,66,74,89,100,90,1];

const oldAges = [100];

type chipCoursesType = {title: string
                         price: number}

const courses =  [
    {title: "Html", price: 110 },
    {title: "Css", price: 200 },
    {title: "Js", price: 150 }
]

const chipPredicate = (course:chipCoursesType )=>course.price < 160;


const chipCourses = [
    {title: "Html", price: 110 },
    {title: "Js", price: 150 }
]


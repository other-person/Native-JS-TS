import React from "react";

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
// деструктуризация объектов
type  manComponentPropseType = {
    title: string
    man: ManType
    food: Array<string>
    car:{model:string}
}

const manComponent: React.FC<manComponentPropseType> = ({title, man, ...props}) => {
    // const {title} = props;
    // const {name} = props.man;
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>

            <div>
                <h2>{man.name}</h2>
            </div>
        </div>
    )
}

import React from "react";
import {MouseEvent, ChangeEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    };
    const onNameChanged = () => {
        alert("User add in data array")
    };
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Age changed: " + event.currentTarget.value)
    };
    const focusLostHandler = () => {
        console.log("Focus lost")
    };

    return (
        <div>
           <textarea onChange={onNameChanged}
                     onBlur={focusLostHandler}
           >Tarik</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name="Delete" onClick={deleteUser}>Delete</button>

        </div>
    )
}
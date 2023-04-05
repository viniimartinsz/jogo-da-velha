import React from "react";
import Input from "../Input"
import Label from "../Label";

const CheckBox = ({ id = "", value = "", content = "" }) => {
    return (

        <>
            <Input id="show" value="show" content="Mostrar eventos" type="checkbox" />
            <Label htmlFor={id} content={content}
        </>


    )
}
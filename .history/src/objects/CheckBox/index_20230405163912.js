import React from "react";
import Input from "../Input"
import Label from "../Label";

const CheckBox = ({ id = "", value = "", content = "" }) => {
    return (

        <>
            <Input id={id} value={value} content={content} type="checkbox" />
            <Label htmlFor={id} content={content} />
        </>


    )
}


export default CheckBox
import React from "react";

const Input = ({ id, value }) => {
    return (
        <input id={id} type="checkbox" value={value} />
      <Label htmlFor="show" content="Mostrar Eventos" />

    )
}


export default Input
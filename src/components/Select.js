import React from "react";

function Select(props) {

    //pass color value up to note component
    function changeColor(event) {
        const colorValue = event.target.value;
        props.colorCall(colorValue);

    }

    return (
        <div className="custom-select" style={{width:200}}>
        <select onChange={changeColor}>
            <option value="0">Change Color</option>
            <option value="blue" >Blue</option>
            <option value="red" >Red</option>
            <option value="green" >Green</option>
        </select>
    </div>
    )
}

export default Select;
import React, {useState} from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Select from "./Select";
import { v4 as uuidv4 } from 'uuid';

function Note(props) {
    const [noteColor, setNoteColor] = useState({
        borderWidth: "5px",
        borderStyle: "solid", 
        borderColor: "#fae29f"
    });
    
    function handleClick() {
        // setNoteColor({
        //         borderWidth: "5px",
        //         borderStyle: "solid", 
        //         borderColor: "#fae29f"

        //     }
           
        // );
        // props.onDelete(props.id);
        props.onDelete(props.id2);
        
    }

   
    function newColor(color) {
        setNoteColor(prevValue => {
            return {
                ...prevValue,
                borderColor: color
            }
        });
    }
    // function newColor(colorValue) {
    //     props.changeColor(colorValue, props.id2)
    // }

    // function newColor(passedColor) {
    //     console.log("test")
    //     setNoteColor(prevValue => {
    //         return {
    //         ...prevValue, 
    //         borderColor: passedColor,
    //         borderStyle: "dashed",
    //         }
    //     })
    // }
    // function newColor() {
    //     props.onColorChange(props.id2, props.style)
    // }
    

    return (
        <div className="note" style={noteColor} >
            <h1 style={noteColor}>{props.title}</h1>
            <p>{props.message}</p>
            {/* <p>`{props.unique} x`</p> */}
            <button onClick={handleClick} >
                <DeleteForeverIcon />
                {/* {uuidv4()} */}
            </button>

            <Select colorCall={newColor} />
            {/* <Select onClick={colorCall} /> */}


        </div>
    )
}

export default Note;
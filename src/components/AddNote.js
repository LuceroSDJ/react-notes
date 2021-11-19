//summary:
//This component manages the state of an object which is used to render input values
//In addition, button onClick *** passes the stateful object *** up to the App component
//  we use props to tap into addNote() function which lives in our App comonent

import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//instead of using a regular button element, use a FAB (Floating Action Button)
import Fab from '@mui/material/Fab';
import { v4 as uuidv4 } from 'uuid';


function AddNote(props) {
    const uniqueNum = uuidv4();
    const [inputTextObject, setinputTextObject] = useState({
        title: "",
        message: "",
        randomID: ""
    });
    
    function userInput(event) {
        const {name, value} = event.target;
        const randomID = event.target.name2;
        // const titleText = event.target.value;
        // const messageText = event.target.value;
        // const uniqueNum = uuidv4();
        console.log("create uniqueNum:", uniqueNum);
        setinputTextObject(prevValue => {
            return {
                ...prevValue,
                [name]: value,
                randomID: uniqueNum
                // [randomID]: {uuidv4()}

            };
        });
    }

    function submitNote(event) {
        props.add(inputTextObject);
        setinputTextObject({
            title: "",
            message: "",
            randomID: ""
            
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                    // id2={uuidv4()}
                    // name2="randomID"
                    name="title" 
                    value={inputTextObject.title} 
                    onChange={userInput}
                    placeholder="Activity"
                />
                <textarea
                    name="message" 
                    value={inputTextObject.message} 
                    onChange={userInput}
                    placeholder="Action Plan"
                    rows="4"
                /> 
                <Fab className="button" onClick={submitNote} >
                    <AddCircleOutlineIcon />
                </Fab>
            </form>
        </div>
    );
}

export default AddNote;
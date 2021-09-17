//summary:
//This component manges the state of an object which is used to render input values
//In addition, button onClick *** passes the stateful object *** up to the App component
//  we use props to tap into addNote() function which lives in our App comonent

import React, {useState} from "react";

function AddNote(props) {
    const [inputTextObject, setinputTextObject] = useState({
        title: "",
        message: ""
    });
    
    function userInput(event) {
        const {name, value} = event.target;
        // const titleText = event.target.value;
        // const messageText = event.target.value;
        setinputTextObject(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.add(inputTextObject);
        setinputTextObject({
            title: "",
            message: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    value={inputTextObject.title} 
                    onChange={userInput}
                    placeholder="Title"
                />
                <textarea
                    name="message" 
                    value={inputTextObject.message} 
                    onChange={userInput}
                    placeholder="Content"
                    rows="4"
                /> 
                <button onClick={submitNote} >Add</button>
            </form>
        </div>
    );
}

export default AddNote;
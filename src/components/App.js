import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer"
import AddNote from "./AddNote";
import { v4 as uuidv4 } from 'uuid';


function App() {
    const [notesArray, setNotesArray] = useState([]);

    // const [noteColor, setNoteColor] = useState({
    //     borderWidth: "5px",
    //     borderStyle: "solid", 
    //     borderColor: "#fae29f"
    // });


    function addNote(inputTextObject) {
        setNotesArray(prevValue => {
            return [...prevValue, inputTextObject]});
        console.log(notesArray);
    }

    function deleteNote(id2) {
        //update notesArray state by deleting the note
        console.log(id2);
        setNotesArray(prevValue => {
            return prevValue.filter((noteItem, index) => {
                // return index !== id;
                return noteItem.randomID !== id2;
            });
        });
    }


    // function color(id2, style) {

    // }

      
    return (
        <div>
            <Header />
            <AddNote add={addNote} />
            <div>
                {notesArray.map((item, index) => {
                    console.log("index: " + index);
                    console.log("noteLetter: ", item.title);
                    console.log("ranID: ", item.randomID);
                    {/* console.log("new npm: " + item.id2); */}
                    return <Note 
                        key={index}
                        id={index}
                        // id2={uuidv4()}
                        id2={item.randomID}
                        title={item.title}
                        message={item.message}
                        // unique={item.uniqueID}
                        onDelete={deleteNote}
                        // onChangeColor={color}
                        />
                })}
                
            </div>
            <Footer />
        </div>
    ) 
    
}

export default App;
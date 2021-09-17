import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer"
import AddNote from "./AddNote";


function App() {
    const [notesArray, setNotesArray] = useState([]);

    function addNote(inputTextObject) {
        setNotesArray(prevValue => {
            return [...prevValue, inputTextObject]});
        console.log(notesArray);
    }

    function deleteNote(id) {
        //update notesArray state by deleting the note
        setNotesArray(prevValue => {
            return prevValue.filter((noteItem, index) => {
                return index !== id;
            });
        });
            

    }

    return (
        <div>
            <Header />
            <AddNote add={addNote} />
            <div>
                {notesArray.map((item, index) => {
                    return <Note 
                        key={index}
                        id={index}
                        title={item.title}
                        message={item.message}
                        onDelete={deleteNote}
                    />
                })}
                
            </div>
            <Footer />
        </div>
    ) 
    
}

export default App;
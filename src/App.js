import Sidebar from "./Sidebar";
import Main from "./Main";
import "./app.css";
import {useState, useEffect} from "react";
import uuid from "react-uuid";

function App() {

  const [true_var, setCollapse] = useState(false);

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes])
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter(({id}) => id !== idToDelete));
  }

  const hamburger = () => {
    (true_var?setCollapse(false):setCollapse(true))
  }
  const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote);
  }

  const onUpdateNote = (updatedNote) => {
    const updateArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updateArray);
  };

  return( 
  <div className="Lotion">
    <button className="hamburger" onClick={hamburger}>≡</button>
    <div className="header">
      <div>
      <h1>Lotion</h1>
      <p>Like Notion, but worse.</p>
      </div>
    </div>
    <div className="flex-parent">
      <div className="flex-child L">
      <Sidebar
      notes={notes}
      onAddNote={onAddNote} 
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      hamburger={true_var}
      />
      </div>
      <div className="flex-child R">
      <Main activeNote={getActiveNote()}
      onUpdateNote={onUpdateNote}
      onDeleteNote={onDeleteNote}
      />
      </div>
    </div>
  </div>
  );
}

export default App;

import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Main = ({ activeNote, onUpdateNote, onDeleteNote}) => {



    const onEditField = (field, value) => {
        onUpdateNote({...activeNote, [field]: value, lastModified: Date.now()});
      };

    const saveClick = () => {
        seteditMode(false);
    }
    const calendarChange = (date) =>{
        const updatedNote = {
            ...activeNote, lastModified: date.getTime(),
        };
        onUpdateNote(updatedNote);
    }

    const [editMode, seteditMode] = useState(true);

    const editClick = () => {
        seteditMode(true);
    }

    if (!activeNote) return <div className="no-active-note">Select a note to start</div>;
    const deleteClick = () => {
        if(window.confirm("Do you want to delete this note?")){
            onDeleteNote(activeNote.id);
        }
    };

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };
    return (
        <div className="app-main">
        <div className="note-meta"></div>
        <div className="app-main-note-edit">
        <span>
            <input type="text" id="title" placeholder="Untitled" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} />
            <span id = "add_space_bottom">
            {editMode ? 
            <button className="button" onClick={saveClick}>💾</button>
            :<button className="button" onClick={editClick}>✎</button>
            }
            <button className="button" onClick={deleteClick}><strong>🗑</strong></button>
            </span>
        </span>
            {editMode ? (
            <div>
                 <input type="datetime-local" value={formatDate(activeNote.lastModified)} onChange = {(e) => calendarChange(new Date(e.target.value))}/>
                <ReactQuill style={{width: 1000, height: 640}} value = {activeNote.body} onChange = {(value)=>onEditField('body',value)}/>
            </div>
        ):(
            <div className="app-main-note-display">
                <div dangerouslySetInnerHTML={{__html:activeNote.body}}></div>
            </div>
        )}
        </div>
        </div>
    );
    };
    
    export default Main;

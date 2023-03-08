import React from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";


function Main() {
    return (    
    <div className="app-main">
    <div className="app-main-note-edit">
        <input placeholder="Untitled" type="text" id="title" autoFocus/>
        <button className="edit">✎</button>
        <button className="del"><strong>  🗑</strong></button>
        <ReactQuill placeholder="Your note here." style={{width: 1000, height:750}}/>
    </div>
    </div>

    );

}

export default Main;
const Sidebar = ({notes, onAddNote, activeNote, setActiveNote, hamburger}) => {
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);
    const extractText = (html) => {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(html, "text/html");
        return parsed.documentElement.textContent;
    };

    return( <div className={`app-sidebar ${hamburger ? "hide" : ""}`}>
        <div className="app-sidebar-header">
            <h1>
                Notes
            </h1>
            <button onClick={onAddNote}> <strong>&#x2B;</strong> </button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (            
            <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                </div>
                <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("en-CA", {
                    hour:"2-digit", minute:"2-digit",
                })}</small>
                <p>{note.body && note.body.substr(0,100) + "..."}</p>
            </div>))}
        </div>
    </div>
    );
};

export default Sidebar;
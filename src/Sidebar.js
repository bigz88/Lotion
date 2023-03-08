function Sidebar({notes}) {
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>
                Notes
            </h1>
            <button> <strong>&#x2B;</strong> </button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (            
            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>Title</strong>
                </div>
                <small className="note-meta">Last modified [date]</small>
                <p>Preview</p>
            </div>))}
        </div>
    </div>

}

export default Sidebar;
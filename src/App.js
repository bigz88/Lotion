import Sidebar from "./Sidebar";
import Main from "./Main";
import "./app.css";
import "./index.css";
import {useState} from "react";

function App() {

  const [notes, setNotes] = useState([]);
  
  return( <div className="Lotion">
    <div className="flex-parent">
      <div className="flex-child L">
      <Sidebar notes={notes} />
      </div>
      <div className="flex-child R">
      <Main />
      </div>
    </div>
  </div>
  );
}

export default App;

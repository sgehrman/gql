import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <button
        onClick={e => {
          axios.get("/health").then(res => {
            console.log(res);
          });
        }}
      >
        Health
      </button>
    </div>
  );
}

export default App;

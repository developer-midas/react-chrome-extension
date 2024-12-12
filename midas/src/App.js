import React from "react";
import CheckAndInput from "./components/input";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Hello! This is a simple React Chrome extension.");
  };

  return (
    <div className="App" style={{ padding: "20px", textAlign: "center" }}>
      
      <h1>Welcome to My Chrome Extension</h1>
      <p>This is a simple React-based Chrome extension popup.</p>
      <CheckAndInput />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          background: "#4CAF50",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

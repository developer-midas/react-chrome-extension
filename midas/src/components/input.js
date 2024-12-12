import React, { useState } from "react";

function CheckAndInput() {
  // State management for the checkbox and input
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}>
      <h3>React Checkbox and Input Example</h3>

      {/* Checkbox */}
      <label style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>

      {/* Input */}
      <label style={{ display: "block", marginBottom: "10px" }}>
        <span>Enter text:</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            marginLeft: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </label>

      

      {/* Display current state */}
      <div style={{ marginTop: "20px" }}>
        <p>Checkbox is {isChecked ? "Checked" : "Unchecked"}</p>
        <p>Input Value: {inputValue}</p>
      </div>
    </div>
  );
}

export default CheckAndInput;

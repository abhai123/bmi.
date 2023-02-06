import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    setBmi(weight / (height * height));
  };

  const resetForm = () => {
    setName("");
    setHeight(0);
    setWeight(0);
    setBmi(0);
  };

  return (
    <div className="container medical-background">
      <h1 className="title">Body Mass Index (BMI) Calculator</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height (m):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button onClick={calculateBMI} style={{ marginRight: "10px", marginTop: "5px" }}>
          Calculate BMI
        </button>
        <button onClick={resetForm} style={{ marginTop: "5px" }}>
          Reset
        </button>
      </div>
      <h2>{name ? `${name}'s` : ""} BMI: {bmi}</h2>
    </div>
  );
};

export default App;
  
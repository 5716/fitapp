import React, { useState } from "react";

export default function WeightCalculator() {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [results, setResults] = useState(null);

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    if (!h || h < 100) return;

    const devine =
      gender === "male"
        ? 50 + 2.3 * ((h - 152.4) / 2.54)
        : 45.5 + 2.3 * ((h - 152.4) / 2.54);

    const robinson =
      gender === "male"
        ? 52 + 1.9 * ((h - 152.4) / 2.54)
        : 49 + 1.7 * ((h - 152.4) / 2.54);

    const miller =
      gender === "male"
        ? 56.2 + 1.41 * ((h - 152.4) / 2.54)
        : 53.1 + 1.36 * ((h - 152.4) / 2.54);

    setResults({
      devine: devine.toFixed(1),
      robinson: robinson.toFixed(1),
      miller: miller.toFixed(1),
    });
  };

  return (
    <div className="weight-calc">
      <h2>Perfect Weight Calculator</h2>

      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="input-group">
        <label>Your Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button onClick={calculateIdealWeight}>Calculate</button>

      {results && (
        <div className="results">
          <h4>Your ideal weight based on popular formulas:</h4>
          <p>
            <b>Devine:</b> {results.devine} kg
          </p>
          <p>
            <b>Robinson:</b> {results.robinson} kg
          </p>
          <p>
            <b>Miller:</b> {results.miller} kg
          </p>
        </div>
      )}
    </div>
  );
}

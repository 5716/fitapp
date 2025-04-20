import React from "react";

export default function Calculator({ selectedFoods }) {
  const totalCalories = selectedFoods.reduce(
    (sum, food) => sum + food.calories,
    0
  );

  return (
    <div className="calculator">
      <h3>Selected Foods:</h3>
      <ul>
        {selectedFoods.map((f, i) => (
          <li key={i}>
            {f.name} - {f.calories} kcal
          </li>
        ))}
      </ul>
      <h4>Total: {totalCalories} kcal</h4>
    </div>
  );
}

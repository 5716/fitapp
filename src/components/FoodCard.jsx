import React from "react";

export default function FoodCard({ food, onAdd }) {
  return (
    <div
      className="food-card"
      onClick={() => onAdd(food)}
      title={`${food.calories} kcal`}
    >
      <strong>{food.name}</strong>
      <div className="hint">(Hover to see calories)</div>
    </div>
  );
}

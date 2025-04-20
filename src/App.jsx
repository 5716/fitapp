import React, { useState } from "react";
import foods from "./data/foods";
import FoodCard from "./components/FoodCard";
import WeightCalculator from "./components/WeightCalculator";
import "./App.css";

function App() {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [activeTab, setActiveTab] = useState("calorie");

  const handleAddFood = (food) => {
    setSelectedFoods([...selectedFoods, food]);
  };

  const handleClearFoods = () => {
    setSelectedFoods([]);
  };

  const totalCalories = selectedFoods.reduce(
    (acc, food) => acc + food.calories,
    0
  );

  const calculateCaloriesBurned = (activity) => {
    const activityRates = {
      cycling: 8,
      jogging: 10,
      swimming: 7,
    };

    return (totalCalories / activityRates[activity]).toFixed(1);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Calorie & Weight Calculator</h1>

      <div className="tabs">
        <button
          className={activeTab === "calorie" ? "active-tab" : ""}
          onClick={() => setActiveTab("calorie")}
        >
          Calorie Calculator
        </button>
        <button
          className={activeTab === "weight" ? "active-tab" : ""}
          onClick={() => setActiveTab("weight")}
        >
          Perfect Weight Calculator
        </button>
      </div>

      <div className="content">
        {activeTab === "calorie" && (
          <>
            <div className="food-library">
              {foods.map((food, i) => (
                <FoodCard key={i} food={food} onAdd={handleAddFood} />
              ))}
            </div>

            {selectedFoods.length > 0 && (
              <div className="selected-foods">
                <h3>✅ Selected Foods</h3>
                <h4 style={{ marginTop: "16px", color: "beige" }}>
                  The daily average human calorie need is around 2000 kcal.
                </h4>

                <div className="selected-list">
                  {selectedFoods.map((food, i) => (
                    <div key={i} className="selected-item">
                      {food.name} - {food.calories} cal
                    </div>
                  ))}
                </div>

                <div className="total-calories">
                  <h4>Total Calories: {totalCalories} kcal</h4>
                </div>

                <div className="activity-suggestions">
                  <h4>Fun Activities to Burn {totalCalories} Calories:</h4>
                  <ul>
                    <li>
                      🚴 Cycling: {calculateCaloriesBurned("cycling")} minutes
                    </li>
                    <li>
                      🏃 Jogging: {calculateCaloriesBurned("jogging")} minutes
                    </li>
                    <li>
                      🏊 Swimming: {calculateCaloriesBurned("swimming")} minutes
                    </li>
                  </ul>
                </div>

                <button className="clear-button" onClick={handleClearFoods}>
                  Clear Selection
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "weight" && <WeightCalculator />}
      </div>
    </div>
  );
}

export default App;

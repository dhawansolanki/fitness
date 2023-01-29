import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = () => {
    setBMI((weight / (height * height) * 10000).toFixed(2));
  };

  return (
    <div className="mx-auto my-10 max-w-sm w-full">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="border p-4 rounded">
        <div className="text-center font-bold text-xl mb-4">BMI Calculator</div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Weight (kg):</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Height (cm):</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={calculateBMI}
          >
            Calculate
          </button>
        </div>
        {bmi && (
          <div className="mb-4">
            <p className="font-bold">Your BMI: {bmi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;

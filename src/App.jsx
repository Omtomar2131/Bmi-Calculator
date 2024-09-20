import { useMemo, useState } from "react";
import "./App.css"
const App = () => {
  const [height, setHeight] = useState(170); // Default height set to 170 for better clarity
  const [weight, setWeight] = useState(70);  // Default weight set to 70 for better clarity

  const bmi = useMemo(() => {
    return (weight / (height / 100) ** 2).toFixed(2);
  }, [height, weight]);

  const bmicategory = useMemo(() => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }, [bmi]);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  return (
    <main>
      <div>
        <h1>BMI Calculator</h1>
        <div className="input-section">
          <p className="slider-output">Weight = {weight} kg</p>
          <input
            type="range"
            className="input-slider"
            step={1}
            min={40}
            max={200}
            value={weight}
            onChange={onWeightChange}
          />
          <p className="slider-output">Height = {height} cm</p>
          <input
            type="range"
            className="input-slider"
            step={1}
            min={120}
            max={240}
            value={height}
            onChange={onHeightChange}
          />
          <div className="output">
            <p>Your BMI is {bmi}</p>
            <p className="output">{bmicategory}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

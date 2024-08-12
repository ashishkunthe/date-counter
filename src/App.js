import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date();
  function reset() {
    setCount(1);
    setStep(0);
  }

  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>{" "}
        {step}
      </div>
      <br />
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toString()}</span>
      </div>
      {count !== 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}

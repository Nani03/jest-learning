import { useState } from "react";
import "./App.css";
import SummaryForm from "./pages/SummaryForm";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />

      <SummaryForm />
    </div>
  );
}

export default App;

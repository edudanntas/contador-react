import React, { useState } from "react";
import './App.css'
import GreenButton from "./components/AddButton";
import RedButton from "./components/RemoveButton";
import OrangeButton from "./components/ResetButton";

const App = () => {
  const [number, SetNumber] = useState(0);

  const handleAddNumber = () => {
    SetNumber(number + 1);
  }

  const handleDecreaseNumber = () => {
    SetNumber(number - 1);
  }

  const handleResetNumber = () => {
    SetNumber(0);
  }

  return <div className="container">
    <h1>{number}</h1>
    <GreenButton onClick={handleAddNumber}>Adicionar</GreenButton>
    <RedButton onClick={handleDecreaseNumber}>Remover</RedButton>
    <OrangeButton onClick={handleResetNumber}>Zerar</OrangeButton>
  </div>
}

export default App;
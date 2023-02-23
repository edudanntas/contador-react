import React, { useState } from "react";
import './App.css'
import AddButton from "./components/AddButton";
import RemoveButton from "./components/RemoveButton";
import ResetButton from "./components/ResetButton";

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
    <AddButton onClick={handleAddNumber}>Adicionar</AddButton>
    <RemoveButton onClick={handleDecreaseNumber}>Remover</RemoveButton>
    <ResetButton onClick={handleResetNumber}>Zerar</ResetButton>
  </div>
}

export default App;
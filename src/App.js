import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import History from "./components/History"
import Budget from "./components/Budget";

function App() {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    const budget = JSON.parse(localStorage.getItem("budget")) || [];
    const newExpense = [];
    const newIncome = [];

    budget.forEach(trans => trans.type === "income" ? newIncome.push(trans) : newExpense.push(trans));
    setExpense(newExpense);
    setIncome(newIncome);
  }, []);

  return (
    <div className="grid grid-rows-6 grid-flow-row grid-template min-h-[100vh]">
      <Navbar setExpense={setExpense} setIncome={setIncome} />
      <History expense={expense} income={income} />
      <Budget expense={expense} income={income} />
    </div>
  );
}

export default App;
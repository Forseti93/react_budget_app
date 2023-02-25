import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const allExpenses = expenses.reduce((acc, val) => {
    return acc + val.cost;
  }, 0);

  return (
    <div className="alert alert-primary">Total expenses: {allExpenses}</div>
  );
};

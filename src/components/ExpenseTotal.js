import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const ExpenseTotal = ({className}) => {
  const { expenses } = useContext(AppContext);
  const allExpenses = expenses.reduce((acc, val) => {
    return acc + +val.cost;
  }, 0);

  return (
      <div className={className}>Total expenses: {allExpenses}</div>
  );
};

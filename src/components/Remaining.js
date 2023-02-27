import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Remaining = ({ className }) => {
  const { expenses, budget } = useContext(AppContext);
  const remainingBudget = expenses.reduce((acc, val) => {
    return acc - val.cost;
  }, budget);

  return <div className={className}>Remaining: {remainingBudget}</div>;
};

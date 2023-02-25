import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const remainingBudget = expenses.reduce((acc, val) => {
    return acc - val.cost;
  }, budget);
  const alertType = remainingBudget < 0 ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {remainingBudget}</span>
    </div>
  );
};

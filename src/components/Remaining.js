import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppProvider";
import cn from "classnames";
import styles from "../style_modules/Remaining.module.css";

export const Remaining = ({ className }) => {
  const { expenses, budget, remainingLow, dispatch } = useContext(AppContext);

  const remainingBudget = expenses.reduce((acc, val) => {
    return acc - val.cost;
  }, budget);

  useEffect(() => {
    if (remainingLow) {
      setTimeout(() => {
        dispatch({
          type: "TOGGLE_REMAINING_LOW",
          payload: false,
        });
      }, 300);
    }
  }, [remainingLow]);

  return (
    <div className={cn(className, { [styles.redBorderShaking]: remainingLow })}>
      Remaining: {remainingBudget}
    </div>
  );
};

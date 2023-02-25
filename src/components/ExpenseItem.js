import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import styles from "../style_modules/ExpenseItem.module.css";

export const ExpenseItem = (props) => {
  const { expenses, dispatch } = useContext(AppContext);

  const increaseBudget = () => {
    const data = {
      name: props.name,
      cost: props.amount,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: data,
    });
  };

  const deleteField = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.name,
    });
  };

  const clearExpense = () => {
    dispatch({
      type: "CLEAR_EXPENSE",
      payload: props.name,
    });
  };

  return (
    <tr className={styles.tableRow}>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td>
        <i className="material-icons" onClick={increaseBudget}>
          &#xe146;
        </i>{" "}
        <i className="material-icons" onClick={deleteField}>
          &#xf230;
        </i>
      </td>
      <td>
        <i className="material-icons" onClick={clearExpense}>
          &#xe872;
        </i>
      </td>
    </tr>
  );
};

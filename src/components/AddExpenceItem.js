import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import styles from "../style_modules/AddExpenceItem.module.css";
import { Input } from "./Input";

export const AddExpenceItem = () => {
  // expense instance: { id: "Gas", name: "Gas", cost: 1700 },
  const [newExpense, setNewExpense] = useState({
    id: "",
    name: "",
    cost: null,
  });
  const [itemIsAdding, setItemIssAdding] = useState(false);
  const { dispatch, expenses } = useContext(AppContext);
  console.log(newExpense.cost);
  const addExpense = () => {
    setItemIssAdding(true);
  };

  const changeHandler = (e) => {
    const val = e.target.value;
    setNewExpense((prev) => {
      if (e.target.type === "text") {
        return {
          ...prev,
          id: val,
          name: val,
        };
      } else {
        return {
          ...prev,
          cost: val,
        };
      }
    });
  };

  if (!itemIsAdding) {
    return (
      <tr className={styles.tableRow}>
        <td onClick={addExpense}>
          <i className="material-icons">&#xe03b;</i>
        </td>
        <td onClick={addExpense}>Add new item</td>
        <td></td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr className={styles.tableRow}>
        <td>
          <Input
            type="text"
            placeholder="item?"
            value={newExpense.name}
            changeHandler={changeHandler}
          />
        </td>
        <td>
          <Input
            type="number"
            placeholder="value?"
            value={newExpense.cost}
            changeHandler={changeHandler}
          />
        </td>
        <td></td>
        <td>Add</td>
      </tr>
    );
  }
};

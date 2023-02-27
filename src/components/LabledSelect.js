import React, { useContext } from "react";
import { ACTION_TYPES, AppContext } from "../context/AppProvider";

export const LabledSelect = (props) => {
  const { expenses } = useContext(AppContext);

  const options = () => {
    switch (props.label) {
      case "Item":
        return expenses.map((expense, ind) => {
          return (
            <option value={expenses[ind].name} key={ind}>
              {expense.name}
            </option>
          );
        });
      case "Action":
        return props.actions.map((action, ind) => {
          return (
            <option value={action} key={ind}>
              {action}
            </option>
          );
        });
    }
  };

  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        {props.label}
      </label>
      <select
        className="form-select"
        id="inputGroupSelect01"
        onChange={(e) => props.handleChange(e, props.label)}
        defaultValue={expenses[0].name}
      >
        {options()}
      </select>
    </div>
  );
};

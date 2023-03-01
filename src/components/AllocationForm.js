import React, { useContext, useState } from "react";
import { LabledSelect } from "./LabledSelect";
import { AppContext, actions, ACTION_TYPES } from "../context/AppProvider";
import { LabledInput } from "./LabledInput";

const AllocationForm = () => {
  const { expenses, dispatch, budget, remainingLow } = useContext(AppContext);
  const [item, setItem] = useState(expenses[0].name);
  const [action, setAction] = useState(actions[0]);
  const [number, setNumber] = useState("");

  // to toggle class name on error
  const handleErrorVisualization = (errorToShowMS) => {
    dispatch({
      type: "TOGGLE_REMAINING_LOW",
      payload: true,
    });

    setTimeout(() => {
      dispatch({
        type: "TOGGLE_REMAINING_LOW",
        payload: false,
      });
    }, errorToShowMS);
  };

  // to check, does the new expense has appropriate cost
  const expenseCostAppropriate = (cost) => {
    const allExpenses = expenses.reduce((sum, val) => {
      return sum + +val.cost;
    }, 0);
    return +budget - +allExpenses - +cost >= 0 ? true : false;
  };

  //   to pass special change handlers
  const handleChange = (event, label) => {
    const value = event.target.value;
    switch (label) {
      case "Item":
        setItem(value);
        break;
      case "Action":
        setAction(value);
        break;
      case "Number":
        if (expenseCostAppropriate(value)) {
          setNumber(value);
        } else {
          dispatch({
            type: "TOGGLE_REMAINING_LOW",
            payload: true,
          });

          // handleErrorVisualization(3000);
          setNumber((prev) => prev);
        }
        break;
    }
  };

  // to update state, depending on select elements
  const submitHandler = () => {
    const data = {
      name: item,
      cost: +number,
    };
    switch (action) {
      case "add monthly budget":
        dispatch({
          type: "ADD_EXPENSE",
          payload: data,
        });
        break;
      case "minus monthly budget":
        dispatch({
          type: "ADD_EXPENSE",
          payload: { ...data, cost: -data.cost },
        });
        break;
      case "add monthly budget":
        dispatch({
          type: "ADD_EXPENSE",
          payload: data.name,
        });
        break;
      case "clear monthly budget":
        dispatch({
          type: "DELETE_EXPENSE",
          payload: data.name,
        });
        break;
      case "set monthly budget":
        dispatch({
          type: "DELETE_EXPENSE",
          payload: data.name,
        });
        dispatch({
          type: "ADD_EXPENSE",
          payload: data,
        });
        break;
    }
  };

  return (
    <div>
      <h3 className="mt-3">Change Allocation</h3>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md mt-2">
            <LabledSelect
              value={item}
              label={"Item"}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md mt-2">
            <LabledSelect
              value={action}
              label={"Action"}
              actions={actions}
              handleChange={handleChange}
            />
          </div>

          <div className="col-md mt-2">
            <LabledInput
              value={number}
              label={"Number"}
              disabled={action === "clear monthly budget"}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <button
          onClick={submitHandler}
          type="button"
          className="mt-3 w-100 btn btn-primary"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AllocationForm;

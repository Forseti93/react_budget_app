import React, { useContext, useState } from "react";
import { LabledSelect } from "./LabledSelect";
import { AppContext, actions, ACTION_TYPES } from "../context/AppProvider";
import { LabledInput } from "./LabledInput";

const AllocationForm = () => {
  const { expenses, dispatch } = useContext(AppContext);
  const [item, setItem] = useState(expenses[0].name);
  const [action, setAction] = useState(actions[0]);
  const [number, setNumber] = useState(0);

  //   to pass special change handlers
  const handleChange = (event, label) => {
    switch (label) {
      case "Item":
        setItem(event.target.value);
        break;
      case "Action":
        setAction(event.target.value);
        break;
      case "Number":
        setNumber(event.target.value);
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
            <LabledSelect label={"Item"} handleChange={handleChange} />
          </div>
          <div className="col-md mt-2">
            <LabledSelect
              label={"Action"}
              actions={actions}
              handleChange={handleChange}
            />
          </div>

          <div className="col-md mt-2">
            <LabledInput
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

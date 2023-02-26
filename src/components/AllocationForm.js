import React, { useContext, useState } from "react";
import { LabledSelect } from "./LabledSelect";
import { AppContext } from "../context/AppProvider";
import { LabledInput } from "./LabledInput";

const AllocationForm = () => {
  const { expenses, dispatch } = useContext(AppContext);

  const [item, setItem] = useState(expenses[0]);
  const [action, setAction] = useState("ADD_EXPENSE");
  const [number, setNumber] = useState(0);
  console.log("item: ", item, "action: ", action, "number: ", number);

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

  return (
    <div>
      <h1 className="mt-3">*move to bottom Change Allocation</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <LabledSelect label={"Item"} handleChange={handleChange} />
          </div>
          <div className="col-sm">
            <LabledSelect label={"Action"} handleChange={handleChange} />
          </div>
          <div className="col-sm">
            <LabledInput label={"Number"} handleChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <button type="button" className="w-100 mt-3 btn btn-primary">
          Update
        </button>
      </div>
    </div>
  );
};

export default AllocationForm;

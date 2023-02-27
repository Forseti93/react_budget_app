import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const updateBudget = (e) => {
    dispatch({
      type: "SET_BUDGET",
      payload: e.target.value,
    });
  };

  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        Budget:
      </span>
      <input
        value={budget}
        onChange={(e) => updateBudget(e)}
        type="number"
        className="form-control"
        placeholder="Budget"
      />
    </div>
  );
};

export default Budget;

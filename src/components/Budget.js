import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div>
      <div className="alert alert-secondary">
        <span>Budget: {budget}</span>
      </div>
    </div>
  );
};

export default Budget;

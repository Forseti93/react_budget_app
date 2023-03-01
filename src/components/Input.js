import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Input = (props) => {
  return (
    <span>
      <input
        name={props.name}
        type={props.type}
        value={props.value ? props.value : ""}
        className="form-control"
        style={{ width: "auto" }}
        placeholder={props.placeholder}
        onKeyDown={(e) => {
          (e.key === "e" || e.key === "+" || e.key === "-" || e.key === ".") &&
            e.preventDefault();
        }}
        onChange={(e) => props.changeHandler(e)}
      />
    </span>
  );
};

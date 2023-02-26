import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const TestTheme = () => {
  const {  dispatch, backgroundColor, color } =
    useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor,
        color,
        display: "flex",
        borderRadius: "5px",
        width: "fit-content",
        margin: "20px",
      }}
    >
      <span
        style={{
          border: "2px solid #084298",
          borderRadius: "5px",
          padding: "0 5px",
        }}
        className={"unselectable"}
        type="checkbox"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "toggleThemeMode" });
        }}
      >
        Toggle night mode (react context)
      </span>
    </div>
  );
};

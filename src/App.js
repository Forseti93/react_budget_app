import React, { useContext, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under

import { AppProvider } from "./context/AppProvider";
import { TestTheme } from "./components/TestTheme";
import { Remaining } from "./components/Remaining";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { ThemeContext } from "./context/ThemeProvider";
import AllocationForm from "./components/AllocationForm";

const App = () => {
  const { backgroundColor, color, nightMode } = useContext(ThemeContext);

  const htmlEl = document.querySelector("html");
  const bodyEl = document.querySelector("body");
  const updateCssVariable = (element, propertyName, newPropertyValue) => {
    return element.style.setProperty(propertyName, newPropertyValue);
  };
  // html, body - set backgroundColor, color on toggling dark mode
  useEffect(() => {
    updateCssVariable(htmlEl, "--background-context", backgroundColor);
    updateCssVariable(htmlEl, "--color-context", color);
    updateCssVariable(bodyEl, "--background-context", backgroundColor);
    updateCssVariable(bodyEl, "--color-context", color);
  }, [nightMode]);
  return (
    <AppProvider>
      <TestTheme />
      <div
        className="container"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        <AllocationForm />
        <h1 className="mt-3">Budget Allocation</h1>
        <div className="row mt-3">
          {/* Add Budget component here under */}
          <div className="col-sm">
            <Budget />
          </div>
          {/* Add ExpenseTotal component here under */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          {/* Add Remaining component here under */}
          <div className="col-sm">
            <Remaining />
          </div>
          {/* Add ExpenseList component here under */}
          <h3 className="mt-3">Allocation</h3>
          <div className="row">
            <ExpenseList />
          </div>
          {/* Add ExpenseItem component here under */}
          {/* Add AllocationForm component here under */}
        </div>
      </div>
    </AppProvider>
  );
};
export default App;

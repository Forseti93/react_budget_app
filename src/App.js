import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import { AppContext, AppProvider } from "./context/AppProvider";
import { TestTheme } from "./components/TestTheme";
import { Remaining } from "./components/Remaining";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { ThemeContext } from "./context/ThemeProvider";
import AllocationForm from "./components/AllocationForm";
import { styles } from "./App.css";

const App = () => {
  const { backgroundColor, color, nightMode } = useContext(ThemeContext);
  const { expenses, budget } = useContext(AppContext);

  const [remainings, setRemainings] = useState();
  useEffect(() => {
    const remainingBudget = expenses.reduce((acc, val) => {
      return acc - val.cost;
    }, budget);
    setRemainings(remainingBudget < 0 ? "danger" : "success");
  }, [budget, expenses]);

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
    <>
      <TestTheme />
      <div
        className="container"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        <h1 className="mt-3">Budget Allocation</h1>
        <div className="container text-center mt-3">
          <div className="row">
            {/* Add Budget component here under */}
            <div className="col-md mt-2">
              <Budget />
            </div>
            {/* Add ExpenseTotal component here under */}
            <div className="col-md mt-2">
              <ExpenseTotal className="info-box primary" />
            </div>
            {/* Add Remaining component here under */}
            <div className={`col-md mt-2 `}>
              <Remaining className={`info-box ${remainings}`} />
            </div>
          </div>
        </div>
        {/* Add ExpenseList component here under */}
        <h3 className="mt-3">Allocation</h3>
        <div className="row">
          <ExpenseList />
        </div>
        {/* Add AllocationForm component here under */}
        <AllocationForm />
      </div>
    </>
  );
};
export default App;

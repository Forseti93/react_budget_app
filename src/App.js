import React, { useContext } from "react";

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

const App = () => {
  const { backgroundColor, color } = useContext(ThemeContext);
  console.log(backgroundColor);
  return (
    <AppProvider>
      <TestTheme />
      <div
        className="container"
        style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
      >
        <h1 className="mt-3">Budget Allocation</h1>
        <div className="row mt-3">
          {/* Add Budget component here under */}
          <div className="col-sm">
            <Budget />
          </div>
          {/* Add Remaining component here under */}
          <div className="col-sm">
            <Remaining />
          </div>
          {/* Add ExpenseTotal component here under */}
          <div className="col-sm">
            <ExpenseTotal />
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

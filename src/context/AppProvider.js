import React, { createContext, useReducer } from "react";

// actions to send on the dispatch
export const ACTION_TYPES = [
  "ADD_EXPENSE",
  "CLEAR_EXPENSE",
  "RED_EXPENSE",
  "DELETE_EXPENSE",
  "SET_BUDGET",
  "CHG_CURRENCY",
];

// actions to display for a user
export const actions = [
  "add monthly budget",
  "minus monthly budget",
  "clear monthly budget",
  "set monthly budget",
];

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 25000,
  expenses: [
    { id: "Gas", name: "Gas", cost: 1700 },
    { id: "Electricity", name: "Electricity", cost: 300 },
    { id: "Water", name: "Water", cost: 400 },
  ],
  currency: "£",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let remaining = 0;

  if (state.expenses) {
    const totalExpenses = state.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    remaining = state.budget - totalExpenses;
  }

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: remaining,
        dispatch,
        currency: state.currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let budget = 0;
  switch (action.type) {
    case ACTION_TYPES[0]:
      let total_budget = 0;
      total_budget = state.expenses.reduce((previousExp, currentExp) => {
        return previousExp + currentExp.cost;
      }, 0);
      total_budget = total_budget + action.payload.cost;
      action.type = "DONE";
      if (total_budget <= state.budget) {
        total_budget = 0;
        state.expenses.map((currentExp) => {
          if (currentExp.name === action.payload.name) {
            currentExp.cost = action.payload.cost + currentExp.cost;
          }
          return currentExp;
        });
        return {
          ...state,
        };
      } else {
        alert("Cannot increase the allocation! Out of funds");
        return {
          ...state,
        };
      }
    case ACTION_TYPES[1]:
      let newExpenses = [];
      state.expenses.map((expense) => {
        if (expense.name !== action.payload) newExpenses.push(expense);
      });
      return {
        ...state,
        expenses: newExpenses,
      };
    case ACTION_TYPES[2]:
      const red_expenses = state.expenses.map((currentExp) => {
        if (
          currentExp.name === action.payload.name &&
          currentExp.cost - action.payload.cost >= 0
        ) {
          currentExp.cost = currentExp.cost - action.payload.cost;
          budget = state.budget + action.payload.cost;
        }
        return currentExp;
      });
      action.type = "DONE";
      return {
        ...state,
        expenses: [...red_expenses],
      };
    case ACTION_TYPES[3]:
      action.type = "DONE";
      state.expenses.map((currentExp) => {
        if (currentExp.name === action.payload) {
          budget = state.budget + currentExp.cost;
          currentExp.cost = 0;
        }
        return currentExp;
      });
      action.type = "DONE";
      return {
        ...state,
        budget,
      };
    case ACTION_TYPES[4]:
      action.type = "DONE";
      state.budget = action.payload;

      return {
        ...state,
      };
    case ACTION_TYPES[5]:
      action.type = "DONE";
      state.currency = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

import { createContext, useContext, useReducer } from "react";

// 1. create initial state
export const themeInitialState = {
  nightMode: false,
  backgroundColor: "white",
  color: "black",
};

// 2. create context
export const ThemeContext = createContext();

// 3. create theme context provide
export const ThemeContextProvider = (props) => {
  // 4. to share state and reducer to all nested children
  const [state, dispatch] = useReducer(ThemeReducer, themeInitialState);

  return (
    <ThemeContext.Provider
      value={{
        nightMode: state.nightMode,
        backgroundColor: state.backgroundColor,
        color: state.color,
        dispatch,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggleThemeMode":
      if (state.nightMode) {
        return {
          ...state,
          nightMode: false,
          backgroundColor: (state.backgroundColor = "white"),
          color: (state.color = "black"),
        };
      } else {
        return {
          ...state,
          nightMode: true,
          backgroundColor: (state.backgroundColor = "black"),
          color: (state.color = "white"),
        };
      }
    default:
      return state;
  }
};

import React, { createContext, useContext, useReducer } from "react";

const GlobalStateContext = createContext();

const initialState = { lan: "fa", them: "dark" };

const reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, them: "dark" };
    case "light":
      return { ...state, them: "light" };
    case "en":
      return { ...state, lan: "en" };
    case "fa":
      return { ...state, lan: "fa" };
    case "ge":
      return { ...state, lan: "ge" };
    case "ku":
      return { ...state, lan: "ku" };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

export const PracticeContext = createContext();

export const practiceReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRACTICE":
      return {
        practices: action.payload,
      };
    case "CREATE_PRACTCE":
      return {
        practices: [action.payload, ...state.workouts],
      };
    case "DELETE_PRACTICE":
      return {
        practices: state.practices.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const PracticeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(practiceReducer, {
    practices: null,
  });

  return (
    <PracticeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PracticeContext.Provider>
  );
};

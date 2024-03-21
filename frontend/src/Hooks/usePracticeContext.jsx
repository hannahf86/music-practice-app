import { PracticeContext } from "../Contexts/";
import { useContext } from "react";

export const usePracticeContext = () => {
  const context = useContext(PracticeContext);

  if (!context) {
    throw Error("Error: PracticeContext missing");
  }

  return context;
};

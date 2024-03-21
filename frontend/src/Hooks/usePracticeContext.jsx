import { useContext } from "react";
import { PracticeContext } from "../Contexts/PracticeContext";

export const usePracticeContext = () => {
  const context = useContext(PracticeContext);

  if (!context) {
    throw Error("Error: PracticeContext missing");
  }

  return context;
};

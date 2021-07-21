import { Reducer } from "react";
import { Actions, ContextDefaultType } from "./types";

export const reducer: Reducer<ContextDefaultType, Actions> = (
  state,
  action
) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.value,
      };
    default:
      return state;
  }
};

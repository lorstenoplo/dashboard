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
    case "CLEAR_PRODUCT_SELECTION":
      return {
        ...state,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

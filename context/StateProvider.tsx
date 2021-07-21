import React, { createContext, useContext, useReducer } from "react";
import {
  InitContextProps,
  StateProviderPropstype,
  ContextDefaultType,
} from "./types";

export const initialState: ContextDefaultType = {
  selectedProduct: null,
};

// Prepares the dataLayer
export const StateContext = createContext<InitContextProps>(
  {} as InitContextProps
);

// Wrap our app and provide the Data layer
export const StateProvider: React.FC<StateProviderPropstype> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

import { ProductType } from "../../types/Products";
import { Reducer, Dispatch } from "react";

export type ContextDefaultType = {
  selectedProduct: ProductType | null;
};

export interface Actions {
  type: string;
  value: any;
}

export type StateProviderPropstype = {
  reducer: Reducer<ContextDefaultType, Actions>;
  initialState: ContextDefaultType;
};

export interface InitContextProps {
  state: ContextDefaultType;
  dispatch: Dispatch<Actions>;
}

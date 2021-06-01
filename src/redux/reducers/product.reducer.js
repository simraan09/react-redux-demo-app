// Redux reducer is plain js function takes initial state and action
// Based on action type update the state

import { ActionsType } from "../constants/action.type";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionsType.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionsType.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

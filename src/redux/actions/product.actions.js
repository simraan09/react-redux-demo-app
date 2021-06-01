// The redux action is plain js functions, typically return an object with action type and payload (Data)

import { ActionsType } from "../constants/action.type";

export const setProducts = (products) => {
  return {
    type: ActionsType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionsType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionsType.REMOVE_SELECTED_PRODUCT,
  };
};

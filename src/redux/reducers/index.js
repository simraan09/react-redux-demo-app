// Application can have multiple reducers
// It should be combined before use
import { combineReducers } from "redux";

// Reducers
import { productReducer, selectedProductReducer } from "./product.reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

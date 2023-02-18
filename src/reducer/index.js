import { combineReducers } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingReducer";

const reducer = combineReducers({
  cart: shoppingReducer,
});

export default reducer;

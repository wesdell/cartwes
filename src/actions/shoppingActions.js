import {
  ADD_TO_CART,
  CLEAN_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const removeFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const cleanCart = () => ({ type: CLEAN_CART });

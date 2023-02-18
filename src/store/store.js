import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";

const store = configureStore({ reducer });

store.subscribe(() => store.getState());

export default store;

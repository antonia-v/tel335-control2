import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducer/reducer"
// import { createStore } from "redux";

const store = configureStore({
  reducer: favoritesReducer,
});

export default store;

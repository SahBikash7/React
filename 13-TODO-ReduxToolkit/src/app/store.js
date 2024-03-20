/* There are few steps to make a store :
1. we need to import {configureStore} */

// After making a store we make our reducers :

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice"; // Making the store aware of the reducers.

export const store = configureStore({
  reducer: todoReducer,
});

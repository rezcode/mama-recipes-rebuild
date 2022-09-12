import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    auth: authReducer,
  },
});

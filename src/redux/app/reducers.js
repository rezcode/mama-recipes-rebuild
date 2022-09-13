import { combineReducers } from "@reduxjs/toolkit";
import recipe from "../features/recipeSlice";
import auth from "../features/authSlice";

const reducers = combineReducers({
  recipe,
  auth,
});

export default reducers;

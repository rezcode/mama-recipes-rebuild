import { combineReducers } from "@reduxjs/toolkit";
import recipe from "../features/recipe/recipeSlice";
import auth from "../features/auth/authSlice";
import user from "../features/user/userSlice";

const reducers = combineReducers({
  recipe,
  auth,
  user,
});

export default reducers;

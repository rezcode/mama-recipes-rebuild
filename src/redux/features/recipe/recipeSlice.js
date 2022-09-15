import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewRecipe = createAsyncThunk(
  "recipes/fetchNewRecipes",
  () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/recipes/find/recent`)
      .then((res) => res?.data?.data);
  }
);

export const searchRecipe = createAsyncThunk(
  "recipes/searchRecipe",
  (title) => {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/recipes/find/name?title=${title}`,
        {
          title: "easy",
        }
      )
      .then((res) => res?.data?.data?.slice(0, 5));
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    data: [],
    search: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewRecipe.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(searchRecipe.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export default recipeSlice.reducer;

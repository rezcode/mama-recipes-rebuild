import React from "react";
import "./global.scss";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Layout/WrapperHeaderFooter";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RecipesList from "./pages/RecipesList/RecipesList";
import AddNewRecipe from "./pages/AddNewRecipe/AddNewRecipe";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-list" element={<RecipesList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-new-recipe" element={<AddNewRecipe />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { useState } from "react";
import food from "../../assets/images/banner-image.png";
import NewRecipes from "../../components/NewRecipes/NewRecipes";
import style from "./Home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/features/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.recipe.search);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipe(searchTitle));
  };

  return (
    <>
      <div className="mb-4 bg-light rounded-3">
        <div className="container mb-5">
          <div>
            <div className="row align-items-center">
              <div className={`col-md-5 order-md-2 ${style.bannerImg}`}>
                <img src={food} alt="food" />
              </div>
              <div className="col-md-7 order-md-1">
                <h1 className="display-3 fw-bold">
                  Discover <span className="text-primary">Recipe</span> <br /> &{" "}
                  Delicious Food
                </h1>
                <form onKeyUp={handleSearch} className="row g-3">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Food name..."
                      onChange={(e) => setSearchTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary mb-3">
                      Find
                    </button>
                  </div>
                </form>
                <div className={style.recipeSuggestion}>
                  <ul className="list-group">
                    {searchTitle === ""
                      ? null
                      : searchList?.map((item, index) => (
                          <>
                            <li
                              key={index}
                              className="list-group-item list-group-item-action"
                            >
                              {item.title}
                            </li>
                          </>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewRecipes />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import food from "../../assets/images/banner-image.png";
import NewRecipes from "../../components/NewRecipes/NewRecipes";
import style from "./Home.module.scss";

const Home = () => {
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
                <form className="row g-3">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Food name..."
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
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                    <li className="list-group-item">See all Recipes</li>
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

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./NewRecipes.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewRecipe } from "../../redux/features/recipeSlice";
import { useEffect } from "react";

const NewRecipes = () => {
  const dispatch = useDispatch();
  const newRecipes = useSelector((state) => state.recipe.data);

  useEffect(() => {
    dispatch(fetchNewRecipe());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <h5 className="text-muted">New Recipes</h5>
          </div>
          <div className="col-6 text-end">
            <Link
              className={style.link}
              id="RouterNavLink"
              to={"/recipes-list"}
            >
              <span className="text-muted">
                See more <BsArrowRightShort size={20} />
              </span>
            </Link>
          </div>
          <div className="container mb-3">
            <hr />
          </div>
        </div>
        {newRecipes?.map((item, index) => (
          <div className="row justify-content-center" key={index}>
            <div className="container">
              <div className="card mb-3 p-0">
                <div className="row g-0">
                  <div className={`col-md-3 ${style.cardImage}`}>
                    <img src={item.food_image} alt="..." />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.ingredients}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewRecipes;

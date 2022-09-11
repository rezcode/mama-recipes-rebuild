import React from "react";
import style from "./AddNewRecipe.module.scss";

const AddNewRecipe = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h5 className="text-muted">Add New Recipe</h5>
        </div>
        <hr />
        <div className={`card ${style.formAddRecipe}`}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Title Food</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Example Nasi Goreng, Bakso, Etc"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue={1}>Cakes</option>
                      <option value={2}>Dessert</option>
                      <option value={3}>Fat Food</option>
                      <option value={4}>Vegan Food</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Ingredients
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Sugar, 1/2 Water, Flour, etc..."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Food Image</label>
                  <input type="file" className="form-control" />
                  <small className="text-muted">
                    file type must be .png, .jpeg, .jpg, .webp only
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewRecipe;

import React from "react";
import { Link } from "react-router-dom";
import style from "./Auth.module.scss";

const Login = () => {
  return (
    <>
      <div className="container">
        <div
          className={`row justify-content-center ${style.verticalCenter} align-items-center`}
        >
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center text-white bg-primary">
                LOGIN
              </div>
              <div className="container mt-3">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="xxxx@mail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      autoComplete="on"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Password"
                    />
                  </div>
                  <hr />
                  <div className="mb-3 text-center d-grid">
                    <button
                      type="button"
                      className="btn btn-primary text-white"
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-center">
                    don't have an account yet?{" "}
                    <Link to={"/register"}>sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

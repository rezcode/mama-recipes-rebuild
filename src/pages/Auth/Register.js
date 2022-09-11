import React from "react";
import { Link } from "react-router-dom";
import style from "./Auth.module.scss";

const Register = () => {
  return (
    <>
      <div className="container">
        <div
          className={`row justify-content-center ${style.verticalCenter} align-items-center`}
        >
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center text-white bg-primary">
                REGISTER
              </div>
              <div className="container mt-3">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="xxxx@mail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="0812xxxxxxxxxx"
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
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Retype your password"
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
                    Already have an account? <Link to={"/login"}>sign in</Link>
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

export default Register;

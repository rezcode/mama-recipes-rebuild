import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Auth.module.scss";
import { login } from "../../redux/features/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        text: message,
      });
    }

    if (user?.token) {
      navigate("/");
    }
    // dispatch(reset());
  }, [user, isError, isSuccess, navigate, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

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
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="xxxx@mail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      autoComplete="on"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                  <hr />
                  <div className="mb-3 text-center d-grid">
                    {isLoading ? (
                      <ButtonSpinner />
                    ) : (
                      <button
                        className="btn btn-primary text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
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

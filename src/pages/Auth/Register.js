import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Auth.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { name, email, phoneNumber, password } = userData;

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

    if (isSuccess) {
      navigate("/login");
    }
  }, [user, isError, isSuccess, navigate, message, dispatch]);

  const onchange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        text: "Confirm password doesn't matched with your password",
      });
    } else {
      const body = {
        name,
        email,
        phoneNumber,
        password,
      };
      dispatch(register(body));
      if (isSuccess) {
        Swal.fire({
          icon: "success",
          text: message,
        }).then((result) => navigate("/login"));
      }
    }
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
                REGISTER
              </div>
              <div className="container mt-3">
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                      id="name"
                      name="name"
                      value={name}
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="xxxx@mail.com"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0812xxxxxxxxxx"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onchange}
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
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      autoComplete="on"
                      placeholder="Retype your password"
                      id="password2"
                      name="password2"
                      onChange={(e) => setConfirmPassword(e.target.value)}
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

import axios from "axios";

// Register user
const register = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    userData
  );

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    userData
  );

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;

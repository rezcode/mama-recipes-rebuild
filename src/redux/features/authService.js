import axios from "axios";

// Register user
const register = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    userData
  );

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  console.log("response register redux", response);
  return response.data;
};

const authService = {
  register,
};

export default authService;

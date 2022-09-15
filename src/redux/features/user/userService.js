import axios from "axios";

// Get user
const getUser = async (userId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/${userId.id}`,
    userId.config
  );

  return response?.data;
};

const userService = {
  getUser,
};

export default userService;

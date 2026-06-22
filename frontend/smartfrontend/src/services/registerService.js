import API from "./api";

export const registerUser = async (userData) => {

  const response = await API.post(
    "accounts/register/",
    userData
  );

  return response.data;
};
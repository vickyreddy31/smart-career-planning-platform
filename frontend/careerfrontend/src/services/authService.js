import API from "./api";

// Register User
export const registerUser = async (userData) => {
  return await API.post("register/", userData);
};

// Login User
export const loginUser = async (userData) => {
  return await API.post("login/", userData);
};

// Get Profile
export const getProfile = async () => {
  return await API.get("profile/");
};

// Update Profile
export const updateProfile = async (profileData) => {
  return await API.put("profile/update/", profileData);
};
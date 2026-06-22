import API from "./api";

export const uploadResume = async (formData) => {

  const response = await API.post(
    "resumes/upload/",
    formData
  );

  return response.data;
};
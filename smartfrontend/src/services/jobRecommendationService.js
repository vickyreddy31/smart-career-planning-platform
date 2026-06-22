import API from "./api";

export const getRecommendations = async () => {

  const response = await API.get(
    "jobs/recommendations/"
  );

  return response.data;
};
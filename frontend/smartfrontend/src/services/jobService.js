import api from "../api/api";

export const getJobs = async () => {

  const response = await api.get(
    "jobs/recommendations/"
  );

  return response.data;
};
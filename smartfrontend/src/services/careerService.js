import api from "../api/api";

export const getCareers = async () => {

  const response = await api.get(
    "careers/recommendations/"
  );

  return response.data;
};
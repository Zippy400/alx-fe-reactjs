import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;

export const searchGitHubUsers = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};

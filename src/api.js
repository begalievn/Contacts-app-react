import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/RomanChasovitin/demo-api/";

export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}users`);
  return response;
};

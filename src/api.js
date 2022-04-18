import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/RomanChasovitin/demo-api/";

export const getAllUsers = () => {
  axios.get(`${BASE_URL}users`).then((response) => {
    console.log(response);
  });
};

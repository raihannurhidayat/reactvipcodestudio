import axios from "axios";

export const getProducts = async (url, callback) => {
  axios
    .get(`https://fakestoreapi.com/${url}`)
    .then((data) => callback(data.data))
    .catch((err) => console.log(err));
};

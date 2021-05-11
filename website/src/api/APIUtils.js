import axios from "axios";

/* const getHeaders = () => {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

export const get = () => {
  return new Promise((resolve) => {
    axios
      .get(`${BASE_URL}`, getHeaders())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
 */
export default axios.create({
    baseURL: "https://api.github.com/users",
});

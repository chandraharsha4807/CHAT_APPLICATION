import axios from "axios";

console.log(import.meta.env.VITE_NODE_URL);

const axiosInstance = (urlName: string) => {
  const instance = axios.create({
    baseURL: import.meta.env[urlName],
    headers: {
      apikey: "",
      authorization: "",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        return Promise.reject(error.response);
      }
      return Promise.reject(error);
    }
  );
  return instance
};

export default axiosInstance;

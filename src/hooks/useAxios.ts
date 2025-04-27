import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "x-app-secret": "secret-key-not-expose-backend-outside-app",
    "Content-Type": "application/json",
  },
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;

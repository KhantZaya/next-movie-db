import axios, { AxiosError, AxiosResponse } from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${process.env.ACCESS_TOKEN}`;
    console.log("Config: ", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


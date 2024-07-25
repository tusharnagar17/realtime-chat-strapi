import axios from "axios";
import { api_url } from "./auth";

// Create an Axios instance
const api = axios.create({
  baseURL: `${api_url}`, // Replace with your Strapi base URL
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Set the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

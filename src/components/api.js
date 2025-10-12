// src/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8000"; // your Django backend URL

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include access token in headers
api.interceptors.request.use(
  async (config) => {
    const access = localStorage.getItem("access_token");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle expired tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired (401) and refresh token is available
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh_token");
      if (refresh) {
        try {
          const response = await axios.post(`${BASE_URL}/api/token/refresh/`, { refresh });
          localStorage.setItem("access_token", response.data.access);

          // Retry original request with new access token
          originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token failed:", refreshError);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/login"; // redirect to login if refresh fails
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;

// axios interceptors docs or ref:
// https://www.npmjs.com/package/axios#interceptors

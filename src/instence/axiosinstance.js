
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Use environment variable
  timeout: 10000,
});

// Add interceptors if needed

export default axiosInstance;

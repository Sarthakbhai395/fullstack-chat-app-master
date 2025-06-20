import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // ✅ Match backend port
  withCredentials: true, // ✅ Needed if using cookies for auth
});

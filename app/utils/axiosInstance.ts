import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
});

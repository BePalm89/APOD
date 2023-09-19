import axios from "axios";

export const apiHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

export const API_APOD = axios.create({
  headers: apiHeader,
  baseURL: import.meta.env.VITE_NASA_API_AOD_URL,
  timeout: 6000,
});

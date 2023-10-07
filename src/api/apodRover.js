import axios from "axios";

export const apiHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

const API_APOD = axios.create({
  headers: apiHeader,
  baseURL: import.meta.env.VITE_NASA_API_APOD_URL,
  timeout: 6000,
});

const MARS_ROVER_API = axios.create({
  headers: apiHeader,
  baseURL: import.meta.env.VITE_NASA_API_ROVER_URL,
  timeout: 6000,
});

export const getApodData = (date) =>
  API_APOD.get(
    `/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}&date=${date}`
  ).then((response) => {
    const apodData = {
      title: response.data.title,
      date: response.data.date,
      url: response.data.url,
      explanation: response.data.explanation,
    };
    return apodData;
  });

export const getRoverData = (date, rover = "curiosity") =>
  MARS_ROVER_API.get(
    `/${rover}/photos?earth_date=${date}&api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`
  ).then((response) => {
    const firstPhoto = response.data.photos[0];

    const roverData = firstPhoto
      ? {
          cameraName: firstPhoto?.camera.full_name,
          title: firstPhoto?.rover.name,
          url: firstPhoto?.img_src,
          date: firstPhoto?.earth_date,
          roverStatus: firstPhoto?.rover.status,
          totalPhotos: firstPhoto?.rover.total_photos,
        }
      : null;

    return roverData;
  });

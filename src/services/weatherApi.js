import axios from "axios";

const API_KEY = "f0d0b9b6611d63667ac180f8bff0a99e";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};
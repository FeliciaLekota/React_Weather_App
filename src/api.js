import axios from "axios";

const API_KEY = "4a7534894227f19647789cc7bc8ab7b3"; // Your actual API key

export const fetchWeather = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};

export const fetchForecast = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};

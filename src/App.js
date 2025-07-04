import React, { useState } from "react";
import SearchBar from "./components/SearhBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { fetchWeather, fetchForecast } from "./api";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const weather = await fetchWeather(city);
      const forecast = await fetchForecast(city);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      alert("City not found.");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>🌤️ Weather Forecast</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard data={weatherData} />
        <Forecast data={forecastData} />
      </div>
    </div>
  );
}

export default App;

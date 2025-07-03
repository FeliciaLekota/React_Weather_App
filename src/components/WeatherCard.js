import React, { useEffect, useState } from "react";

const WeatherCard = ({ data }) => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!data) return null;

  const temp = Math.round(data.main.temp);
  const humidity = Math.round(data.main.humidity);
  const wind = Math.round(data.wind.speed);
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const description = data.weather[0].description;
  const city = data.name;

  const formattedTime = localTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const weekday = localTime.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className="weather-main-card">
      <div className="weather-header">
        <h2>{city}</h2>
        <p>
          {weekday} {formattedTime}
        </p>
        <p style={{ textTransform: "capitalize" }}>{description}</p>
      </div>

      <div className="weather-body">
        <div className="weather-left">
          <img src={iconUrl} alt={description} />
          <p className="temp">{temp}°C</p>
        </div>
        <div className="weather-right">
          <p>🌧️ Precipitation: {humidity}%</p>
          <p>💨 Wind: {wind} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

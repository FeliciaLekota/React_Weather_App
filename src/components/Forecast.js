import React from "react";

const getDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

const Forecast = ({ data }) => {
  if (!data) return null;

  const daily = data.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-scroll">
        {daily.map((item, index) => {
          const day = getDayName(item.dt_txt);
          const temp = Math.round(item.main.temp);
          const iconCode = item.weather[0].icon;
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

          return (
            <div className="forecast-day" key={index}>
              <p>
                <strong>{day}</strong>
              </p>
              <img src={iconUrl} alt={item.weather[0].description} />
              <p style={{ textTransform: "capitalize" }}>
                {item.weather[0].main}
              </p>
              <p>🌡️ {temp}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;

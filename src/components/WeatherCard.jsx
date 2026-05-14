const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].description}</p>

      <div className="weather-details">
        <div>
          <span>💧 Humidity</span>
          <p>{weather.main.humidity}%</p>
        </div>

        <div>
          <span>🌬 Wind</span>
          <p>{weather.wind.speed} м/с</p>
        </div>

        <div>
          <span>Feels like</span>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
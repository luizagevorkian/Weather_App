const Forecast = ({ forecast }) => {
  const dailyForecast = forecast.filter(
    (_, index) => index % 8 === 0
  );

  return (
    <div className="forecast">
      {dailyForecast.map((item) => (
        <div className="forecast-card" key={item.dt}>
          <p>
            {new Date(item.dt_txt).toLocaleDateString()}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="weather"
          />

          <h3>{Math.round(item.main.temp)}°C</h3>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
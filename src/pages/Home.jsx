import { useEffect, useState } from "react";

import {
  getCurrentWeather,
  getForecast,
} from "../services/weatherApi";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import HourlyChart from "../components/HourlyChart";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData.list);
    } catch (err) {
      setError("City didn`t find");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={fetchWeather}
      />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather} />
          <HourlyChart forecast={forecast} />
          <Forecast forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default Home;
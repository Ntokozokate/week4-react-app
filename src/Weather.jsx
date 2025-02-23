import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    description: "",
    humidity: null,
    windSpeed: null,
  });

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5e814a04eddfab1740f07bf0328eee2&units=metric`;
    axios.get(url).then(function (response) {
      setWeatherData({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
      });
    });
  }

  return (
    <div className="container">
      <h1>Weather Search</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="city">Enter City Name:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={handleInputChange}
            placeholder="e.g., Harare"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>
      {weatherData.temperature !== null ? (
        <div className="currentWeather">
          <h2>Current Weather in {city}</h2>
          <ul>
            <li>
              Temperature: {Math.round(weatherData.temperature)} ℃{" "}
              <em>({weatherData.temperature >= 10 ? "Warm" : "Cold"})</em>
            </li>
            <li>Description: {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind Speed: {weatherData.windSpeed} m/s</li>
          </ul>
        </div>
      ) : (
        <p>Fetching temperature for {city}...</p>
      )}
    </div>
  );
}

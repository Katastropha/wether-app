import { useEffect, useState } from "react";
import "./App.css";
// import { weatherCode } from "./weatherCode";
import { getWeatherIcon } from "./getWeatherIcon";

interface weatherDataI {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  is_day: boolean;
  weather_code: number | string;
}

const api = "https://api.open-meteo.com/v1/dwd-icon?";

// const x =
// https://api.open-meteo.com/v1/dwd-icon?          - API
// latitude=52.52&longitude=13.41&                - POSITION
// current=temperature_2m,                        - CURRENT TEMPERATURE
// apparent_temperature,                          - APPARENT TEMPERATURE
// is_day&                                        - TIME OF DAY
// forecast_days=1                                - DAYS

// https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_gusts_10m&forecast_days=1

function App() {
  const [position, setPosition] = useState([]);
  const [isPushed, setIsPushed] = useState(false);
  const [weather, setWeather] = useState<weatherDataI>();
  const [icon, setIcon] = useState({});

  const handlePosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const result: number[] = [pos.coords.latitude, pos.coords.longitude];
      setPosition(result);
      setIsPushed(true);
    });
  };

  useEffect(() => {
    fetch(
      `${api}latitude=${position[0]}&longitude=${position[1]}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_gusts_10m&forecast_days=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current);
        setIcon(getWeatherIcon(data.current.weather_code, data.current.is_day));
        console.log(icon);
      });
  }, [position]);

  return (
    <div>
      {isPushed ? (
        <div className="weather">
          <div className={`icon ${icon.icon}`}></div>
          <h1 className="weather__temperature">
            The temperature in your region is {weather?.temperature_2m} °C
          </h1>
          <p className="weather__apparentTemperature">
            {icon.massage}. The apparent temperature is{" "}
            {weather?.apparent_temperature} °C
          </p>
        </div>
      ) : (
        // <div className={`${icon}`}></div>
        <h1>To check the weather, press the button</h1>
      )}
      <button onClick={handlePosition}>Get Weather</button>
    </div>
  );
}

export default App;

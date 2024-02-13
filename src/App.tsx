import { useEffect, useState } from "react";
import "./App.css";

const api = "https://api.open-meteo.com/v1/dwd-icon?";

// const x =
// https://api.open-meteo.com/v1/dwd-icon?          - API
// latitude=52.52&longitude=13.41&                - POSITION
// current=temperature_2m,                        - CURRENT TEMPERATURE
// apparent_temperature,                          - APPARENT TEMPERATURE
// is_day&                                        - TIME OF DAY
// hourly=temperature_2m&                         - HOURLY
// forecast_days=1                                - DAYS

// https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_gusts_10m&forecast_days=1

const weatheCode = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast sky",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense intensity drizzle",
  56: "Light freezing drizzle",
  57: "Dense intensity freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy intensity rain",
  66: "Light freezing rain",
  67: "Heavy intensity freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy intensity snow fall ",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers slight",
  86: "Heavy snow showers heavy",
  95: "Slight thunderstorm",
  "95 *": "Moderate thunderstorm",
  96: "Thunderstorm with slight hail",
  "99 *": "Thunderstorm with heavy hail",
};

function App() {
  const [temperature, setTemperature] = useState("");
  const [apparentTemperature, setApparentTemperature] = useState("");
  const [position, setPosition] = useState([]);
  const [time, setTime] = useState("forecast_days=1");
  const [isPushed, setIsPushed] = useState(false);
  const [icon, setIcon] = useState("");

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
        setTemperature(data.current.temperature_2m);
        setApparentTemperature(data.current.apparent_temperature);
      });
  }, [position]);

  return (
    <div>
      {isPushed ? (
        <div className="weather">
          <h1 className="weather__temperature">
            The temperature in your region is {temperature} °C
          </h1>
          <p className="weather__apparentTemperature">
            The apparent temperature is {apparentTemperature}
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

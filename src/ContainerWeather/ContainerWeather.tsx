import { useEffect, useState } from "react";
import { WeatherDataI } from "../interfaces/WeatherDataI";
import { getWeatherIcon } from "../getWeatherIcon";

const api = "https://api.open-meteo.com/v1/dwd-icon?";

function ContainerWeather() {
  const [position, setPosition] = useState<readonly [number, number]>();
  const [weather, setWeather] = useState<WeatherDataI>();
  const [iconObj, setIconObj] = useState<{ icon: string[]; message: string }>();

  const handlePosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const result = [pos.coords.latitude, pos.coords.longitude] as const;
      setPosition(result);
    });
  };

  useEffect(() => {
    if (position) {
      fetch(
        `${api}latitude=${position[0]}&longitude=${position[1]}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_gusts_10m&forecast_days=1`
      )
        .then((res) => res.json())
        .then((data: { current: WeatherDataI }) => {
          setWeather(data.current);
          setIconObj(
            getWeatherIcon(data.current.weather_code, data.current.is_day)
          );
        });
    }
  }, [position]);

  return (
    <div className="weatherApp">
      {position ? (
        <div className="weather">
          <div className="weather__icons">
            {iconObj?.icon.map((el: string) => (
              <div className={`icon ${el}`}></div>
            ))}
          </div>
          <h1 className="weather__temperature">
            The temperature in your area is {weather?.temperature_2m} °C
          </h1>
          <p className="weather__apparentTemperature">
            {iconObj?.message}. The apparent temperature is{" "}
            {weather?.apparent_temperature} °C
          </p>
        </div>
      ) : (
        <h1>To check the weather, press the button</h1>
      )}
      <button className="btn_weather" onClick={handlePosition}>
        Get Weather
      </button>
    </div>
  );
}

export default ContainerWeather;

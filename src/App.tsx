import { useEffect, useState } from "react";
import "./App.css";

const api = "https://api.open-meteo.com/v1/dwd-icon?";

// const x =
//   "https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current=temperature_2m,apparent_temperature&hourly=temperature_2m&forecast_days=1";

function App() {
  const [weather, setWeather] = useState([]);
  const [position, setPosition] = useState([]);
  const [time, setTime] = useState("forecast_days=1");
  const [isPushed, setIsPushed] = useState(false);

  const handlePosition = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const result: number[] = [pos.coords.latitude, pos.coords.longitude];

      setPosition(result);
      setIsPushed(true);
    });
  };

  useEffect(() => {
    fetch(
      `${api}latitude=${position[0]}&longitude=${position[1]}&current=temperature_2m,apparent_temperature&hourly=temperature_2m&${time}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.current.temperature_2m));
  }, [position]);

  return (
    <div>
      {isPushed ? (
        <h1>The temperature in your region is {weather} °C</h1>
      ) : (
        <h1>To check the weather, press the button</h1>
      )}
      <button onClick={handlePosition}>Weather</button>
    </div>
  );
}

export default App;

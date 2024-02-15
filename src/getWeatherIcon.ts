import { weatherCode } from "./weatherCode";

export interface WeatherIconI {
  icon: string[];
  message: string;
}

const weatherInfo = {
  0: {
    class: "day-clear",
    message: "Clear sky",
  },

  1: { class: "partly-cloudy", message: "Mainly clear" },
  2: { class: "partly-cloudy", message: "Partly cloudy" },
  3: { class: "clouds", message: "Overcast sky" },

  45: { class: "fog", message: "Fog" },
  48: { class: "fog", message: "Depositing rime fog" },

  51: { class: "day rain", message: "Light drizzle" },
  53: { class: "day rain", message: "Moderate drizzle" },
  55: { class: "day rain rainwater", message: "Dense intensity drizzle" },
  56: { class: "day rain snow", message: "Light freezing drizzle" },
  57: { class: "day rain snow", message: "Dense intensity freezing drizzle" },

  61: { class: "rain rainbow", message: "Slight rain" },
  63: { class: "rain", message: "Moderate rain" },
  65: { class: "rainwater", message: "Heavy intensity rai" },
  66: { class: "rain snow", message: "Light freezing rain" },
  67: { class: "rainwater snow", message: "Heavy intensity freezing rain" },

  71: { class: "day snow", message: "Slight snow fall" },
  73: { class: "snow", message: "Moderate snow fall" },
  75: { class: "snow rainwater", message: "Heavy intensity snow fall" },

  77: { class: "snow snow-storm", message: "Snow grains" },
  80: { class: "rainwater", message: "Slight rain showers" },
  81: { class: "rainwater ", message: "Moderate rain showers" },
  82: { class: "rainwater storm", message: "Violent rain showers" },
  85: { class: "snow storm", message: "Slight snow showers slight" },
  86: { class: "snow snow-storm", message: "Heavy snow showers heavy" },
  95: { class: "snow-storm", message: "Slight thunderstorm" },
  "95 *": { class: "snow-storm storm ", message: "Moderate thunderstorm" },
  96: { class: "snow-storm storm", message: "Thunderstorm with slight hail" },
  "99 *": {
    class: "snow-storm rainwater storm",
    message: "Hunderstorm with heavy hail",
  },
};

const isKeyofWeatherInfo = (
  v: string | number
): v is keyof typeof weatherInfo =>
  !!weatherInfo[v as keyof typeof weatherInfo];

export const getWeatherIcon = (
  code: number | string,
  isDay: boolean
): WeatherIconI | undefined => {
  const className = [];

  if (!isKeyofWeatherInfo(code)) return undefined;

  className.push(isDay ? "day" : "night");

  if (code === 0 && isDay) {
    className.push("day-clear");
  } else if (code === 0 && !isDay) {
    className.push("night-clear");
  } else {
    className.push(weatherInfo[code].class);
  }

  return {
    icon: className,
    message: weatherInfo[code].message,
  };
};

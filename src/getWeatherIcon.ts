import { weatherCode } from "./weatherCode";

export interface weatherIconI {
  icon: string[];
  massage: string;
}

const weatherInfo = {
  0: {
    class: "day-clear",
    massage: "Clear sky",
  },

  1: { class: "partly-cloudy", massage: "Mainly clear" },
  2: { class: "partly-cloudy", massage: "Partly cloudy" },
  3: { class: "clouds", massage: "Overcast sky" },

  45: { class: "fog", massage: "Fog" },
  48: { class: "fog", massage: "Depositing rime fog" },

  51: { class: "day rain", massage: "Light drizzle" },
  53: { class: "day rain", massage: "Moderate drizzle" },
  55: { class: "day rain rainwater", massage: "Dense intensity drizzle" },
  56: { class: "day rain snow", massage: "Light freezing drizzle" },
  57: { class: "day rain snow", massage: "Dense intensity freezing drizzle" },

  61: { class: "rain rainbow", massage: "Slight rain" },
  63: { class: "rain", massage: "Moderate rain" },
  65: { class: "rainwater", massage: "Heavy intensity rai" },
  66: { class: "rain snow", massage: "Light freezing rain" },
  67: { class: "rainwater snow", massage: "Heavy intensity freezing rain" },

  71: { class: "day snow", massage: "Slight snow fall" },
  73: { class: "snow", massage: "Moderate snow fall" },
  75: { class: "snow rainwater", massage: "Heavy intensity snow fall" },

  77: { class: "snow snow-storm", massage: "Snow grains" },
  80: { class: "rainwater", massage: "Slight rain showers" },
  81: { class: "rainwater ", massage: "Moderate rain showers" },
  82: { class: "rainwater storm", massage: "Violent rain showers" },
  85: { class: "snow storm", massage: "Slight snow showers slight" },
  86: { class: "snow snow-storm", massage: "Heavy snow showers heavy" },
  95: { class: "snow-storm", massage: "Slight thunderstorm" },
  "95 *": { class: "snow-storm storm ", massage: "Moderate thunderstorm" },
  96: { class: "snow-storm storm", massage: "Thunderstorm with slight hail" },
  "99 *": {
    class: "snow-storm rainwater storm",
    massage: "Hunderstorm with heavy hail",
  },
};

export const getWeatherIcon = (
  code: string | number,
  isDay: boolean
): weatherIconI => {
  const className = [];

  if (isDay) className.push("day");
  else className.push("night");

  if (code === 0 && isDay) {
    className.push("day-clear");
  } else if (code === 0 && !isDay) {
    className.push("night-clear");
  } else {
    className.push(weatherInfo[code].class);
  }

  return {
    icon: className,
    massage: weatherInfo[code].massage,
  };
};

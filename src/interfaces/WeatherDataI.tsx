export interface WeatherDataI {
  time: string;
  interval: number;
  temperature_2m: number;
  apparent_temperature: number;
  is_day: boolean;
  weather_code: number | string;
}

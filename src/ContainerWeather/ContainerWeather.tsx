import { ReactComponentElement, ReactElement } from "react";

export const ContainerWeather = (icons): ReactElement => {
  return (
    <div className="weather">
      <div className="weather__icons">
        {icons.map((el: string) => (
          <div className={`icon ${el}`}></div>
        ))}
      </div>
    </div>
  );
};

<div className="weather">
  <div className="weather__icons">
    {icon.icon.map((el: string) => (
      <div className={`icon ${el}`}></div>
    ))}
  </div>

  <h1 className="weather__temperature">
    The temperature in your area is {weather?.temperature_2m} °C
  </h1>
  <p className="weather__apparentTemperature">
    {icon.massage}. The apparent temperature is {weather?.apparent_temperature}{" "}
    °C
  </p>
</div>;

import { useState } from "react";
import { WiCloud, WiDaySunny, WiRain, WiSnow, WiStrongWind } from "react-icons/wi";
import { FaTemperatureLow, FaSun } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import {
  WeatherContainer,
  WeatherInfo,
  Temperature,
  WeatherIcon,
  WeatherDetails,
  ToggleButton
} from "../styles/GlobalStyles";

const getIcon = (description: string) => {
  if (description.includes("cloud")) return <WiCloud size={50} />;
  if (description.includes("rain")) return <WiRain size={50} />;
  if (description.includes("snow")) return <WiSnow size={50} />;
  return <WiDaySunny size={50} />;
};

const Weather = ({ data }: { data: any }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temp: number) => {
    return isCelsius ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  };

  return (
    <WeatherContainer>
      <WeatherInfo>
        <h2>
          {data.name}
        </h2>
        <WeatherIcon>
          {getIcon(data.weather[0].description)}
        </WeatherIcon>
        <Temperature>
          {convertTemperature(data.main.temp)}°{isCelsius ? "C" : "F"}
        </Temperature>
        <WeatherDetails>
          <p>
            <FaTemperatureLow />
             Feels like: {convertTemperature(data.main.feels_like)}°{isCelsius ? "C" : "F"}
          </p>
          <p>
            <MdWaves />
             Pressure: {data.main.pressure} hPa
          </p>
          <p>
            <WiStrongWind />
             Wind Speed: {(data.wind.speed * 3.6).toFixed(1)} km/h
          </p>
          <p>
            <FaSun />
             Humidity: {data.main.humidity}%
          </p>
          <p>
            UV Index: 8
          </p>
        </WeatherDetails>
        <ToggleButton onClick={toggleUnit}>
          Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
        </ToggleButton>
      </WeatherInfo>
    </WeatherContainer>
  );
};

export default Weather;
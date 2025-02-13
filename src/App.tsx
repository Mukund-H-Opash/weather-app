import { useState, useEffect } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Error from "./components/Error";
import {
  Container,
  GlobalStyle,
  Header
} from "./styles/GlobalStyles";

const API_KEY: string = "7c709f6efb91ba769495084d2ac49d08";

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, []);

  const fetchWeather = async (city: string) => {
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {

        throw new (Error as unknown as new (message?: string) => Error)("City not found!");

      }
      const data = await res.json();
      setWeather(data);
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError("Could not fetch weather. Try another city.");
    }
  };

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header>
          <Search onSearch={fetchWeather} />
        </Header>
        {error && <Error message={error} />} 
        {weather && <Weather data={weather} />}
        
      </Container>
    </>
  );
}

export default App;
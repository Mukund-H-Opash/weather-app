import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: #f2f2f2;
    color: #000;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const LocationButton = styled.button`
  padding: 8px 16px;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #2ecc71;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

`;

export const Input = styled.input`
  height: 35px;
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
 background: rgb(255, 255, 255);
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 30%;
  border: none;
  background: #ff4b2b;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: 0.3s;
  &:hover {
    background: #ff416c;
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Temperature = styled.h2`
  font-size: 32px;
  margin: 10px 0;
`;

export const WeatherIcon = styled.div`
  font-size: 50px;
  margin: 10px 0;
`;

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherBox = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export const ToggleButton = styled.button`
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
  &:hover {
    background: #0056b3;
  }
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 5px 0;
  position: absolute;
  width: 10%;
  background: #333;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  li:hover {
    background: #555;
  }
`;


export const SuggestionsDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover, &.selected {
      background: #f0f0f0;
    }

    strong {
      color: #007bff;
    }
  }
`;

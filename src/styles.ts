import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: #f2f2f2;
    color: Black;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;


export const Button = styled.button`
  padding: 10px;
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

export const WeatherBox = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;


export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

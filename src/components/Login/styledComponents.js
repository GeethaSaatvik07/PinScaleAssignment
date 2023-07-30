import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #fff4cf, #f89a23, #00b4b7);
  height: 100vh;
`;

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  height: 50vh;
  width: 35vw;
`;

export const LoginDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UserInputs = styled.input`
  width: 90%;
  border: none;
  outline: none;
  border: 1px solid grey;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  color: black;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  width: 25%;
  height: 35px;
  border-radius: 5px;
  background-color: #02969c;
  color: white;
  border: none;
  outline: none;
`;

export const LoginError = styled.p`
  color: red;
  font-size: 15px;
`;

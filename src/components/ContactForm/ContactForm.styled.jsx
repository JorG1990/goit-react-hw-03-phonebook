
import styled from "styled-components";

export const Button = styled.button`
  margin: 15px 0 10px 10px;
  background-color: #ffffff;
  font-size: 15px;
  color: #04080f;
  border-radius: 3px;
  border: 1px solid #cdcdcd;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #4181e9;
    border: 2px solid #7dafe6;
  }
`;

export const Input = styled.input`
  width: 140px;
  margin-top: 3px;
  border-radius: 2px;
  border: 1px solid #d1d1d1;

  &:hover,
  &:focus {
    border: 1px solid #4181e9;
  }
`;

export const Form = styled.form`
border: 2px solid #5a5a5a;
width: 360px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid 2e6fdf;
  border-radius: 4px;
`;

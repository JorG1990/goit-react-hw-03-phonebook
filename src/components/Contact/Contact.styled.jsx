
import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 2px solid #e8e8e8;
  font-size: 13px;
  border-radius: 4px;
  &:hover {
    background-color: #2e6fdf;
    color: white;
  }
`;

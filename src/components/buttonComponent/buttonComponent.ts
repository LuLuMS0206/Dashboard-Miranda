// 

import styled from "styled-components";

interface ButtonStylesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styled?: string; 
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;

  ${(props) => {
    switch (props.styled) {
      case "login":
        return `
          background-color: #135846;
          color: #EBF1EF;
          border: none;
          width: 100%;
        `;
      case "contact":
        return `
          background-color: #EBF1EF;
          color: #135846;
          border: none;
          width: 100%;
          margin-top: 2rem;
        `;
      case "backForm": 
        return `
          background-color: #135846;
          color: #FFFFFF;
          border: none;
          width: 15%;
        `;
      default:
        return ''; 
    }
  }}
`;

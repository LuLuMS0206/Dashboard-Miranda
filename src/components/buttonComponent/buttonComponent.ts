// 

import styled from "styled-components";

// interface ButtonStylesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     styled?: string; 
// }

export const ButtonStyles = styled.button<{styled:'login'|'contact'|'backForm' | 'viewColor' |'view' | 'refund' | 'booked' | 'pending' | 'canceled' | 'roomAvailable' | 'roomBooked' | 'new' | 'prev' | 'next' | 'progress'}>`
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
                margin-top: 1rem;
    margin-bottom: 1rem;
        `;
      case "contact":
        return `
        background-color: #EBF1EF;
        color: #135846;
        border: none;
        width: 100%;
        margin-top: 2rem;
        `;

      case "viewColor":
        return `
        background-color: #EEF9F2;
        color: #212121;
        border: none;
        width: 100%;
        `;

      case "view":
        return `
        border: 1px solid #799283;
        color: #799283;
            background: transparent;
            width: 100%;
        `;

      case "refund":
        return `
        background-color: #FFEDEC;
        color: #E23428;
        border: none;
        width: 100%;
        `;

      case "booked":
        return `
        background-color: #E8FFEE;
        color: #5AD07A;
        border: none;
        width: 100%;
        `;

      case "pending":
        return `
        background-color: #E2E2E2;
        color: #6D6D6D;
        border: none;
        width: 100%;
        `;

      case "canceled":
        return `
        background-color: #575757;
        color: #BEBEBE;
        border: none;
        width: 100%;
        `;

      case "roomAvailable":
        return `
        background-color: #5AD07A;
        color: #FFFFFF;
        border: none;
        width: 100%;
        `;

      case "roomBooked":
        return `
        background-color: #E23428;
        color: #FFFFFF;
        border: none;
        width: 100%;
        `;

        case "new":
        return `
        background-color: #135846;
        color: #FFFFFF;
        border: none;
        width: 22%;
        `;

      case "prev":
        return `
    background-color: #FFFFFF;
    color: #135846;
    border: 1px solid #135846;
    width: 50%;
    `;

      case "next":
        return `
        background-color: #135846;
    color: #FFFFFF;
    border: none;
width: 50%;
`;

case 'progress': 
return `
    background-color : #FF9C3A;
    color: #FFF;
    width: 7.815em;
    border:none;
    width: 100%;
`

case 'backForm': 
return `
  background-color: #135846;
    color: #FFFFFF;
    border: none;
width: 15%;
`
    }
  }}
`;

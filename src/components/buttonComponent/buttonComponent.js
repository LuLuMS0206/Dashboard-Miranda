import styled from "styled-components";

export const ButtonStyles = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
  width: 100%;

  ${(props) => {
    switch (props.styled) {
      case "login":
        return `
        background-color: #135846;
        color: #EBF1EF;
        border: none;
            
        `;
      case "contact":
        return `
        background-color: #EBF1EF;
        color: #135846;
        border: none;
        `;

      case "viewColor":
        return `
        background-color: #EEF9F2;
        color: #212121;
        border: none;
        `;

      case "view":
        return `
        border: 1px solid #799283;
        color: #799283;
            background: transparent;
        `;

      case "refund":
        return `
        background-color: #FFEDEC;
        color: #E23428;
        border: none;
        `;

      case "booked":
        return `
        background-color: #E8FFEE;
        color: #5AD07A;
        border: none;
        `;

      case "pending":
        return `
        background-color: #E2E2E2;
        color: #6D6D6D;
        border: none;
        `;

      case "canceled":
        return `
        background-color: #575757;
        color: #BEBEBE;
        border: none;
        `;

      case "roomAvailable":
        return `
        background-color: #5AD07A;
        color: #FFFFFF;
        border: none;
        `;

      case "roomBooked":
        return `
        background-color: #E23428;
        color: #FFFFFF;
        border: none;
        `;

      case "prev":
        return `
    background-color: #FFFFFF;
color: #135846;
   border: 1px solid #135846;
    `;

      case "next":
        return `
background-color: #FFFFFF;
color: #135846;
border: 1px solid #135846;
`;

case 'progress': 
return `
    background-color : #FF9C3A;
    color: #FFF;
    width: 7.815em;
    border:none;
`
    }
  }}
`;

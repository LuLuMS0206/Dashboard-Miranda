
import styled from "styled-components";

export const PopupStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const PopupContentStyles = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
        width: 35%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    h2 {
        margin-top: 0;
    }

    label {
        display: block;
        margin: 10px 0 5px;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    button {
        margin-right: 10px;
        cursor: pointer;
        margin-top: 1rem;
    width: 24%;
    }

`;


export const InputStyled = styled.input`
    padding: 0.5rem;
border:none;
background: #f6f6f6;;
border-radius: 0.75rem;

`

export const LabelStyles = styled.label`
    color: #787878;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

`
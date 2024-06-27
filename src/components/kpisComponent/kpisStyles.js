import styled from 'styled-components';


export const KpisComponentStyled = styled.div`
    display: flex;
    width: 100%;
    gap: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
`;


export const KpisCardStyled = styled.div`
        all: unset;
    cursor: pointer;
    width: 20%;
    display: flex;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 5px -4px;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1.5rem;
    transition: scale 0.3s ease 0s, box-shadow 0.2s ease 0s;

`;


export const IconStyled = styled.div`
        display: flex;
    align-items: center;
    background-color: rgb(255, 237, 236);
    padding: 1rem;
    border-radius: 0.5rem;

`;


export const KpisTextStyled = styled.div`
    color: rgb(120, 120, 120);
    font-weight: 300;
    font-size: 0.75rem;


`;

export const KpisH3Styled = styled.h3`
        font-size: 22px;
    color: #393939;



`;
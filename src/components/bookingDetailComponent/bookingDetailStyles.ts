import styled from 'styled-components';

export const BookingDetailContainer = styled.div`
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
`;

export const BookingDetailLeft = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const BookingDetailRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
`;

export const BookingImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
`;

export const BookingDetailContent = styled.div`
    margin-top: 1rem;
`;

export const BookingDetailText = styled.p`
    margin: 0.5rem 0;
    color: #333;
    font-size: 1rem;
    strong {
        font-weight: bold;
    }
`;

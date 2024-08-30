
import { useNavigate } from 'react-router-dom';
import { ButtonStyles } from './../../components/buttonComponent/buttonComponent';
import {
    BookingDetailContainer,
    BookingDetailLeft,
    BookingDetailRight,
    BookingImage,
    BookingDetailContent,
    BookingDetailText
} from './bookingDetailStyles';
import { IoArrowBackSharp } from "react-icons/io5";

interface Booking {
    _id: number;
    guest: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    specialRequest?: string;
}

interface BookingDetailComponentProps {
    booking?: Booking; 
}

export const BookingDetailComponent: React.FC<BookingDetailComponentProps> = ({ booking }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/bookings');
    };

    if (!booking) {
        return <div>No booking data available</div>;
    }

    return (
        <BookingDetailContainer>
            <BookingDetailLeft>
                <ButtonStyles styled='backForm' onClick={handleNavigate} style={{ marginBottom: '10px' }}>
                    <IoArrowBackSharp />
                </ButtonStyles>
                <BookingDetailContent>
                <BookingDetailText><strong>Id:</strong> {booking._id}</BookingDetailText>
                    <BookingDetailText><strong>Guest:</strong> {booking.guest}</BookingDetailText>
                    <BookingDetailText><strong>Check In:</strong> {booking.checkIn}</BookingDetailText>
                    <BookingDetailText><strong>Check Out:</strong> {booking.checkOut}</BookingDetailText>
                    <BookingDetailText><strong>Room Type:</strong> {booking.roomType}</BookingDetailText>
                    <BookingDetailText><strong>Special Request:</strong> {booking.specialRequest}</BookingDetailText>
                </BookingDetailContent>
            </BookingDetailLeft>
            <BookingDetailRight>
                <BookingImage src="src/assets/img/room.jpg" alt="Room Image" />
            </BookingDetailRight>
        </BookingDetailContainer>
    );
};
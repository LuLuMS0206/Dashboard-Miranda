
import { useNavigate } from 'react-router-dom';

export const BookingDetailComponent = ({ booking }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/bookings');
    };

    if (!booking) {
        return <div>No booking data available</div>;
    }

    return (
        <div>
            <button onClick={handleNavigate} style={{ marginBottom: '10px' }}>
                Back to Bookings
            </button>
            <p><strong>Guest:</strong> {booking.guest}</p>
            <p><strong>Check In:</strong> {booking.checkIn}</p>
            <p><strong>Check Out:</strong> {booking.checkOut}</p>
            <p><strong>Room Type:</strong> {booking.roomType}</p>
            <p><strong>Special Request:</strong> {booking.specialRequest}</p>
        </div>
    );
};

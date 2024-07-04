
export const BookingDetailComponent = ({ booking }) => {
    if (!booking) {
        return <div>No booking data available</div>;
    }

    return (
        <div>
            <p><strong>Guest:</strong> {booking.guest}</p>
            <p><strong>Check In:</strong> {booking.checkIn}</p>
            <p><strong>Check Out:</strong> {booking.checkOut}</p>
            <p><strong>Room Type:</strong> {booking.roomType}</p>
            <p><strong>Special Request:</strong> {booking.specialRequest}</p>
        </div>
    );
};


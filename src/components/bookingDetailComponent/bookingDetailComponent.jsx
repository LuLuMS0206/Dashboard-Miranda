


export const BookingDetailComponent = ({ booking }) => {
    return (
        <div>
            <div>
                <p><strong></strong> {booking.guest}</p>
                <p><strong>Check In</strong> {booking.checkIn}</p>
                <p><strong>Check Out</strong> {booking.checkOut}</p>
                <p><strong>Room Info</strong> {booking.roomType}</p>
                <p><strong>Special Request</strong> {booking.specialRequest}</p>
            </div>
            <div>
            </div>
        </div>
    )
};



import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { BookingDetailComponent } from "../../components/bookingDetailComponent/bookingDetailComponent";
import { getBookingById } from '../../assets/features/booking/bookingSlice';

export const BookingDetailPage = () => {
    const { id } = useParams();
    const booking = useSelector(state => getBookingById(state, id)); 

    // console.log("ID from params:", id);
    // console.log("Booking from state:", booking);

    return (
        <NavbarComponent>
            <BookingDetailComponent booking={booking} />
        </NavbarComponent>
    );
};

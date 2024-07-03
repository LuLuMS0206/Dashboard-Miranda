import { BookingDetailComponent } from "../../components/bookingDetailComponent/bookingDetailComponent"
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { useParams } from 'react-router-dom';

export const BookingDetailPage = () => {
    const { id } = useParams();

    return (
        <NavbarComponent>
            <BookingDetailComponent bookingId={id} />
        </NavbarComponent>
    );
};

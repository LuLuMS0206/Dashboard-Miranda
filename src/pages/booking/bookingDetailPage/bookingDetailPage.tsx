import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavbarComponent } from "../../../components/navbarComponent/navbarComponent";
import { BookingDetailComponent } from "../../../components/bookingDetailComponent/bookingDetailComponent";
import { getBookingById } from '../../../assets/features/booking/bookingSlice';
import { RootState } from './../../../store/store'; 

export const BookingDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    const booking = useSelector((state: RootState) => {
        if (id) {
            return getBookingById(state, Number(id)); 
        }
        return null; 
    });

    return (
        <NavbarComponent>
            <BookingDetailComponent booking={booking || undefined} />
        </NavbarComponent>
    );
};

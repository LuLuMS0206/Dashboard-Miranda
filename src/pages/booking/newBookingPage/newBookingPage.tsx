import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createBooking, getBookingById } from '../../../assets/features/booking/bookingSlice';
import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
import { IoArrowBackSharp } from "react-icons/io5";
import { FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled } from '../../../components/styledGeneric/styledGeneric';
import {NavbarComponent} from './../../../components/navbarComponent/navbarComponent'

interface Booking {
    guest: string;
    orderDate: string;
    checkIn: string;
    checkOut: string;
    specialRequest: string;
    roomType: string;
    status: string;
}

export const NewBookingPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const initialFormData: Booking = {
        guest: '',
        orderDate: '',
        checkIn: '',
        checkOut: '',
        specialRequest: '',
        roomType: '',
        status: 'In Progress'
    };

    const [formData, setFormData] = useState<Booking>(initialFormData);

    const booking = useSelector((state: any) => getBookingById(state, parseInt(id!))) || initialFormData;

    useEffect(() => {
        if (booking) {
            setFormData(prevData => ({
                ...prevData,
                ...booking,
            }));
        }
    }, [booking]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id) {
            dispatch(createBooking(formData));
        } 
        navigate('/bookings');
    };

    const handleGoToBookings = () => {
        navigate('/bookings');
    };

    return (
        <div>
            <NavbarComponent>
                <FormStyled onSubmit={handleSubmit}>
                    <ButtonStyles styled='backForm' onClick={handleGoToBookings}>
                        <IoArrowBackSharp />
                    </ButtonStyles>
                    <LabelFormStyled>
                        Huésped:
                        <InputFormStyled type="text" name="guest" value={formData.guest} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Fecha de Pedido:
                        <InputFormStyled type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Check In:
                        <InputFormStyled type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Check Out:
                        <InputFormStyled type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Solicitud Especial:
                        <InputFormStyled type="text" name="specialRequest" value={formData.specialRequest} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Tipo de Habitación:
                        <InputFormStyled type="text" name="roomType" value={formData.roomType} onChange={handleChange} />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Estado:
                        <SelectFormStyled name="status" value={formData.status} onChange={handleChange}>
                            <option value="In Progress">En Progreso</option>
                            <option value="Check In">Check In</option>
                            <option value="Check Out">Check Out</option>
                        </SelectFormStyled>
                    </LabelFormStyled>
                    <ButtonStyles styled='contact' type="submit">Guardar</ButtonStyles>
                </FormStyled>
            </NavbarComponent>
        </div>
    );
};

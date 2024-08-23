import { NavbarComponent } from "./../../../components/navbarComponent/navbarComponent";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookingThunk, updateBookingThunk } from '../../../assets/features/booking/bookingThunk';
import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
import { FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled } from '../../../components/styledGeneric/styledGeneric';
import { IoArrowBackSharp } from "react-icons/io5";
import { RootState, AppDispatch } from '../../../store/store';
import { Booking } from '../../../assets/features/booking/bookingSlice';
import { getBooking } from '../../../assets/features/booking/bookingSlice';

export const BookingEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const booking = useSelector((state: RootState) => getBooking(state));

    const initialFormData: Booking = {
        _id: -1,
        guest: '',
        orderDate: '',
        checkIn: '',
        checkOut: '',
        specialRequest: '',
        roomType: '',
        status: 'In Progress'
    };

    const [formData, setFormData] = useState<Booking>(initialFormData);

    useEffect(() => {
        if (id) {
            dispatch(getBookingThunk(id))
                .unwrap()
                .then((bookingData) => {
                    setFormData(bookingData);
                })
                .catch((error) => {
                    console.error('Failed to fetch booking:', error);
                });
        }
    }, [id, dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateBookingThunk(formData))
            .unwrap()
            .then(() => {
                navigate('/bookings');
            })
            .catch((error) => {
                console.error('Failed to update booking:', error);
            });
    };

    return (
        <NavbarComponent>
            <div>
                <FormStyled onSubmit={handleSubmit}>
                    <ButtonStyles styled='backForm' onClick={() => navigate('/bookings')}>
                        <IoArrowBackSharp />
                    </ButtonStyles>
                    <LabelFormStyled>
                        Huésped:
                        <InputFormStyled
                            type="text"
                            name="guest"
                            value={formData.guest}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Fecha de Pedido:
                        <InputFormStyled
                            type="date"
                            name="orderDate"
                            value={formData.orderDate}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Check In:
                        <InputFormStyled
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Check Out:
                        <InputFormStyled
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Solicitud Especial:
                        <InputFormStyled
                            type="text"
                            name="specialRequest"
                            value={formData.specialRequest}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Tipo de Habitación:
                        <InputFormStyled
                            type="text"
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Estado:
                        <SelectFormStyled
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="In Progress">En Progreso</option>
                            <option value="Check In">Check In</option>
                            <option value="Check Out">Check Out</option>
                        </SelectFormStyled>
                    </LabelFormStyled>
                    <ButtonStyles styled='contact' type="submit">Guardar</ButtonStyles>
                </FormStyled>
            </div>
        </NavbarComponent>
    );
};

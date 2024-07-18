import { NavbarComponent } from "./../../../components/navbarComponent/navbarComponent";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooking, updateBooking } from '../../../assets/features/booking/bookingSlice';
import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
import { FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled } from '../../../components/styledGeneric/styledGeneric';
import { IoArrowBackSharp } from "react-icons/io5";
import { RootState } from '../../../store/store';

interface Booking {
    id: number;
    guest: string;
    orderDate: string;
    checkIn: string;
    checkOut: string;
    specialRequest: string;
    roomType: string;
    status: string;
}

export const BookingEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booking = useSelector(getBooking)

    const initialFormData: Booking = {
        id: -1, 
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
        setFormData(booking as Booking)
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateBooking(formData));
        navigate('/bookings');
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
                            <option value="En Progreso">En Progreso</option>
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

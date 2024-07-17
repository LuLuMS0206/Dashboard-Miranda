import { NavbarComponent } from "./../../../components/navbarComponent/navbarComponent";
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { updateBooking, getBookingById } from '../../../assets/features/booking/bookingSlice';
// import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
// import {FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled} from '../../../components/styledGeneric/styledGeneric'
// import { IoArrowBackSharp } from "react-icons/io5";

// export const BookingEditPage = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const booking = useSelector(state => getBookingById(state, id));

//     const initialFormData = {
//         guest: '',
//         orderDate: '',
//         checkIn: '',
//         checkOut: '',
//         specialRequest: '',
//         roomType: '',
//         status: 'In Progress'
//     };

//     const [formData, setFormData] = useState(initialFormData);

//     useEffect(() => {
//         if (booking) {
//             setFormData(booking);
//         }
//     }, [booking]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(updateBooking(formData)); 
//         navigate('/bookings'); 
//     };

//     return (
//         <div>
//             <NavbarComponent />
//             <FormStyled onSubmit={handleSubmit}>
//             <ButtonStyles  styled='backForm' onClick={() => navigate('/bookings')}><IoArrowBackSharp /></ButtonStyles>
//                 <LabelFormStyled>
//                     Guest:
//                     <InputFormStyled type="text" name="guest" value={formData.guest} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Order Date:
//                     <InputFormStyled type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Check In:
//                     <InputFormStyled type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Check Out:
//                     <InputFormStyled type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Special Request:
//                     <InputFormStyled type="text" name="specialRequest" value={formData.specialRequest} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Room Type:
//                     <InputFormStyled type="text" name="roomType" value={formData.roomType} onChange={handleChange} />
//                 </LabelFormStyled>
//                 <LabelFormStyled>
//                     Status:
//                     <SelectFormStyled name="status" value={formData.status} onChange={handleChange}>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Check In">Check In</option>
//                         <option value="Check Out">Check Out</option>
//                     </SelectFormStyled>
//                 </LabelFormStyled>
//                 <ButtonStyles styled='contact' type="submit">Save</ButtonStyles>
//             </FormStyled>
            
//         </div>
//     );
// };

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBooking, getBookingById } from '../../../assets/features/booking/bookingSlice';
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

    const booking = useSelector((state: RootState) => {
        if (id) {
            return getBookingById(state, Number(id));
        }
        return undefined;
    });

    const initialFormData: Booking = {
        id: 0,
        guest: '',
        orderDate: '',
        checkIn: '',
        checkOut: '',
        specialRequest: '',
        roomType: '',
        status: 'En Progreso'
    };

    const [formData, setFormData] = useState<Booking>(initialFormData);

    useEffect(() => {
        if (booking) {
            setFormData({
                ...initialFormData,
                ...booking 
            });
        }
    }, [booking]);

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

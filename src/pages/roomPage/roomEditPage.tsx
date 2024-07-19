import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editRoom, getRoom, Room } from '../../assets/features/room/roomSlice';
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { NavbarComponent } from '../../components/navbarComponent/navbarComponent';
import { FormStyled, SelectFormStyled, LabelFormStyled, InputFormStyled, TextAreaStyled } from '../../components/styledGeneric/styledGeneric';
import { RootState } from '../../store/store'; 

export const RoomEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const room = useSelector((state: RootState) => getRoom(state));

    const initialFormData: Room = {
        id: '',
        type: '',
        image: '',
        roomType: '',
        roomNumber: '',
        description: '',
        price: 0,
        offerPrice: 0,
        amenities: [],
        status: 'available',
        availability: 'available',
    };

    const [formData, setFormData] = useState<Room>(initialFormData);

    useEffect(() => {
        if (room) {
            setFormData(room as Room);
        }
    }, [room]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                image: URL.createObjectURL(file)
            }));
        }
    };

    const handleAmenitiesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFormData(prevState => ({
            ...prevState,
            amenities: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editRoom(formData));
        navigate('/rooms');
    };

    const handleGoTo = () => {
        navigate('/rooms');
    };

    return (
        <NavbarComponent>
            <FormStyled onSubmit={handleSubmit}>
                <ButtonStyles styled='backForm' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>

                <LabelFormStyled>Imagen:</LabelFormStyled>
                <InputFormStyled type="file" name="image" accept="image/*" onChange={handleFileChange} />

                <LabelFormStyled>Tipo de Habitación:</LabelFormStyled>
                <SelectFormStyled name="roomType" value={formData.roomType} onChange={handleChange}>
                    <option value="single bed">Estándar</option>
                    <option value="double bed">Superior</option>
                    <option value="double superior">Deluxe</option>
                    <option value="suite">Suite</option>
                </SelectFormStyled>

                <LabelFormStyled>Número de Habitación:</LabelFormStyled>
                <InputFormStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />

                <LabelFormStyled>Descripción:</LabelFormStyled>
                <TextAreaStyled name="description" value={formData.description} onChange={handleChange} />

                <LabelFormStyled>Precio:</LabelFormStyled>
                <InputFormStyled type="number" name="price" value={formData.price} onChange={handleChange} />

                <LabelFormStyled>Descuento:</LabelFormStyled>
                <InputFormStyled type="number" name="offerPrice" value={formData.offerPrice} onChange={handleChange} />

                <LabelFormStyled>Amenidades:</LabelFormStyled>
                <SelectFormStyled name="amenities" multiple value={formData.amenities} onChange={handleAmenitiesChange}>
                    <option value="Breakfast">Desayuno</option>
                    <option value="Smart Security">Seguridad Inteligente</option>
                    <option value="Strong Locker">Caja Fuerte</option>
                    <option value="Shower">Ducha</option>
                    <option value="24/7 Online Support">Soporte 24/7</option>
                    <option value="Kitchen">Cocina</option>
                    <option value="Cleaning">Limpieza</option>
                    <option value="Air conditioner">Aire acondicionado</option>
                    <option value="Towels">Toallas</option>
                </SelectFormStyled>

                <ButtonStyles styled='contact' type="submit">Guardar</ButtonStyles>
            </FormStyled>
        </NavbarComponent>
    );
};

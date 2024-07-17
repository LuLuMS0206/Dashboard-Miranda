import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editRoom, selectRoomById } from '../../assets/features/room/roomSlice';
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { NavbarComponent } from '../../components/navbarComponent/navbarComponent';
import { SelectStyled, TextAreaStyled } from '../../components/styledGeneric/styledGeneric';
import { FormStyled, SelectFormStyled, LabelFormStyled, InputFormStyled } from '../../components/styledGeneric/styledGeneric';

interface Room {
    id: number;
    name: string; 
    type: string; 
    image: string;
    roomType: string;
    roomNumber: string;
    description: string;
    price: number;
    discount: number;
    amenities: string[];
}

export const RoomEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const room = useSelector((state: any) => selectRoomById(state, Number(id)));

    const [formData, setFormData] = useState<Room>({
        id: Number(id),
        name: '', // Inicializa nombre
        type: '', // Inicializa tipo
        image: '',
        roomType: '',
        roomNumber: '',
        description: '',
        price: 0,
        discount: 0,
        amenities: []
    });

    useEffect(() => {
        if (room) {
            setFormData({
                ...formData,
                ...room 
            });
        }
    }, [room]);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                <InputFormStyled type="file" name="image" accept="image/*" onChange={handleChange} />

                <LabelFormStyled>Tipo de Habitación:</LabelFormStyled>
                <SelectStyled name="roomType" value={formData.roomType} onChange={handleChange}>
                    <option value="single bed">Estándar</option>
                    <option value="double bed">Superior</option>
                    <option value="double superior">Deluxe</option>
                    <option value="suite">Suite</option>
                </SelectStyled>

                <LabelFormStyled>Número de Habitación:</LabelFormStyled>
                <InputFormStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />

                <LabelFormStyled>Descripción:</LabelFormStyled>
                <TextAreaStyled name="description" value={formData.description} onChange={handleChange} />

                <LabelFormStyled>Precio:</LabelFormStyled>
                <InputFormStyled type="number" name="price" value={formData.price} onChange={handleChange} />

                <LabelFormStyled>Descuento:</LabelFormStyled>
                <InputFormStyled type="number" name="discount" value={formData.discount} onChange={handleChange} />

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

import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { addRoom, Room } from './../../assets/features/room/roomSlice';
import { IoArrowBackSharp } from "react-icons/io5";
import { FormStyled, LabelFormStyled, SelectFormStyled, InputFormStyled } from '../../components/styledGeneric/styledGeneric';

interface RoomFormData {
    image: string;
    roomType: string;
    roomNumber: string;
    description: string;
    price: string;
    offerPrice: string; 
    amenities: string[];
    name: string;  
    type: string;  
}

export const NewRoomPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<RoomFormData>({
        image: '',
        roomType: '',
        roomNumber: '',
        description: '',
        price: '',
        offerPrice: '', 
        amenities: [],
        name: '',  
        type: ''   
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAmenitiesChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({
            ...formData,
            amenities: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const newRoom: Room = {
            id: Date.now().toString(), 
            image: formData.image,
            roomNumber: formData.roomNumber,
            roomType: formData.roomType,
            description: formData.description,
            amenities: formData.amenities,
            price: parseFloat(formData.price),
            offerPrice: parseFloat(formData.offerPrice), 
            status: 'available', 
            availability: 'available', 
            type: formData.type, 
        };
    
        dispatch(addRoom(newRoom));
        navigate('../rooms');
    };

    const handleGoTo = () => {
        navigate('/rooms');
    };

    return (
        <NavbarComponent>
            <FormStyled onSubmit={handleSubmit}>
                <ButtonStyles styled='backForm' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>

                <LabelFormStyled>Image:</LabelFormStyled>
                <InputFormStyled type="file" name="image" accept="image/*" onChange={handleChange} />

                <LabelFormStyled>Room Type:</LabelFormStyled>
                <SelectFormStyled name="roomType" value={formData.roomType} onChange={handleChange}>
                    <option value="single bed">Single Bed</option>
                    <option value="double bed">Double Bed</option>
                    <option value="double superior">Double Superior</option>
                    <option value="suite">Suite</option>
                </SelectFormStyled>

                <LabelFormStyled>Room Number:</LabelFormStyled>
                <InputFormStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />

                <LabelFormStyled>Price:</LabelFormStyled>
                <InputFormStyled type="number" name="price" value={formData.price} onChange={handleChange} />

                <LabelFormStyled>Discount:</LabelFormStyled>
                <InputFormStyled type="number" name="offerPrice" value={formData.offerPrice} onChange={handleChange} />

                <LabelFormStyled>Amenities:</LabelFormStyled>
                <SelectFormStyled name="amenities" multiple value={formData.amenities} onChange={handleAmenitiesChange}>
                    <option value="air conditioning">Air Conditioning</option>
                    <option value="wifi">Wi-Fi</option>
                    <option value="tv">TV</option>
                    <option value="minibar">Minibar</option>
                </SelectFormStyled>

                <ButtonStyles styled='contact' type="submit">Add Room</ButtonStyles>
            </FormStyled>
        </NavbarComponent>
    );
};


import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonStyles } from './../../components/buttonComponent/buttonComponent';
import { InputStyled } from './../../components/popupUserComponent/popupUserStyled';
import { addRoom } from './../../assets/features/room/roomSlice';
import { SelectStyled } from './../../components/styledGeneric/styledGeneric';
import { IoArrowBackSharp } from "react-icons/io5";

export const NewRoomPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        image: '',
        roomType: '',
        roomNumber: '',
        description: '',
        price: '',
        discount: '',
        amenities: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAmenitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({
            ...formData,
            amenities: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRoom = { ...formData, id: Date.now() };
        dispatch(addRoom(newRoom));
        navigate('../rooms'); 
    };

    const handleGoTo = () => {
        navigate('/rooms');
    };

    return (
        <NavbarComponent>

            <form onSubmit={handleSubmit}>
            <ButtonStyles  styled='next' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>
                <div>
                    <label>Image:</label>
                    <InputStyled type="file" name="image" accept="image/*" onChange={handleChange} />
                </div>
                <div>
                    <label>Room Type:</label>
                    <SelectStyled name="roomType" value={formData.roomType} onChange={handleChange}>
                        <option value="single bed">Single Bed</option>
                        <option value="double bed">Double Bed</option>
                        <option value="double superior">Double Superior</option>
                        <option value="suite">Suite</option>
                    </SelectStyled>
                </div>
                <div>
                    <label>Room Number:</label>
                    <InputStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <InputStyled type="number" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Discount:</label>
                    <InputStyled type="number" name="discount" value={formData.discount} onChange={handleChange} />
                </div>
                <div>
                    <label>Amenities:</label>
                    <SelectStyled name="amenities" multiple value={formData.amenities} onChange={handleAmenitiesChange}>
                        <option value="air conditioning">Air Conditioning</option>
                        <option value="wifi">Wi-Fi</option>
                        <option value="tv">TV</option>
                        <option value="minibar">Minibar</option>
                    </SelectStyled>
                </div>
                <ButtonStyles type="submit">Add Room</ButtonStyles>
            </form>
        </NavbarComponent>
    );
};

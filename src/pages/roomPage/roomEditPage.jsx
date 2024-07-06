
import { IoArrowBackSharp } from "react-icons/io5";
import { useState } from 'react';
import {useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editRoom, selectRoomById } from './../../assets/features/room/roomSlice';
import { ButtonStyles } from './../../components/buttonComponent/buttonComponent';
import { NavbarComponent } from './../../components/navbarComponent/navbarComponent';
import { InputStyled } from './../../components/popupUserComponent/popupUserStyled';
import { SelectStyled, TextAreaStyled } from './../../components/styledGeneric/styledGeneric';

export const RoomEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const room = useSelector(state => selectRoomById(state, id));

    const [formData, setFormData] = useState({
        image: '',
        roomType: '',
        roomNumber: '',
        description: '',
        price: '',
        discount: '',
        amenities: []
    });



    useEffect(() => {
        if (room) {
            setFormData(room);
        }
    }, [room]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAmenitiesChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({
            ...formData,
            amenities: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editRoom(formData));
        navigate('/rooms');
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
                        <option value="single bed">Standard</option>
                        <option value="double bed">Superior</option>
                        <option value="double superior">Deluxe</option>
                        <option value="suite">Suite</option>
                    </SelectStyled>
                </div>
                <div>
                    <label>Room Number:</label>
                    <InputStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <TextAreaStyled name="description" value={formData.description} onChange={handleChange} />
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
                        <option value="Breakfast">Breakfast</option>
                        <option value="Smart Security">Smart Security</option>
                        <option value="Strong Locker">Strong Locker</option>
                        <option value="Shower">Shower</option>
                        <option value="24/7 Online Support">24/7 Online Support</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Air conditioner">Air conditioner</option>
                        <option value="Towels">Towels</option>
                    </SelectStyled>
                </div>
                <ButtonStyles styled="submit" type="submit">Save</ButtonStyles>
            </form>
        </NavbarComponent>
    );
};

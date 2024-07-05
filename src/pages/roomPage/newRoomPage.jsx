// import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent"
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { ButtonStyles } from './../../components/buttonComponent/buttonComponent';
// import { InputStyled } from './../../components/popupUserComponent/popupUserStyled';
// import { addRoom } from './../../assets/features/room/roomSlice';
// import {SelectStyled, TextAreaStyled} from './../../components/styledGeneric/styledGeneric'

// export const NewRoomPage = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const [formData, setFormData] = useState({
//         image: '',
//         roomType: '',
//         roomNumber: '',
//         description: '',
//         price: '',
//         discount: '',
//         amenities: []
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleAmenitiesChange = (e) => {
//         const value = Array.from(e.target.selectedOptions, (option) => option.value);
//         setFormData({
//             ...formData,
//             amenities: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newRoom = { ...formData, id: Date.now() }; // Asignar un ID único a la nueva habitación
//         dispatch(addRoom(newRoom));
//         navigate('../rooms'); // Navega de regreso a la lista de habitaciones después de añadir la nueva habitación
//     };

//     return (
//         <NavbarComponent>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Image:</label>
//                     <InputStyled type="file" name="image" accept="image/*" onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Room Type:</label>
//                     <SelectStyled name="roomType" value={formData.roomType} onChange={handleChange}>
//                         <option value="single bed">Single Bed</option>
//                         <option value="double bed">Double Bed</option>
//                         <option value="double superior">Double Superior</option>
//                         <option value="suite">Suite</option>
//                     </SelectStyled>
//                 </div>
//                 <div>
//                     <label>Room Number:</label>
//                     <InputStyled type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <TextAreaStyled name="description" value={formData.description} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <InputStyled type="number" name="price" value={formData.price} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Discount:</label>
//                     <InputStyled type="number" name="discount" value={formData.discount} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label>Amenities:</label>
//                     <SelectStyled name="amenities" multiple value={formData.amenities} onChange={handleAmenitiesChange}>
//                         <option value="Breakfast">Breakfast</option>
//                         <option value="Smart Security">Smart Security</option>
//                         <option value="Strong Locker">Strong Locker</option>
//                         <option value="Shower">Shower</option>
//                         <option value="24/7 Online Support">24/7 Online Support</option>
//                         <option value="Kitchen">Kitchen</option>
//                         <option value="Cleaning">Cleaning</option>
//                         <option value="Air conditioner">Air conditioner</option>
//                         <option value="Towels">Towels</option>
//                     </SelectStyled>
//                 </div>
//                 <ButtonStyles styled="submit" type="submit">Add Room</ButtonStyles>
//             </form>
//         </NavbarComponent>
//     );
// };

import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonStyles } from './../../components/buttonComponent/buttonComponent';
import { InputStyled } from './../../components/popupUserComponent/popupUserStyled';
import { addRoom } from './../../assets/features/room/roomSlice';
import { SelectStyled } from './../../components/styledGeneric/styledGeneric';

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
        const newRoom = { ...formData, id: Date.now() }; // Asignar un ID único a la nueva habitación
        dispatch(addRoom(newRoom));
        navigate('../rooms'); // Navega de regreso a la lista de habitaciones después de añadir la nueva habitación
    };

    return (
        <NavbarComponent>
            <form onSubmit={handleSubmit}>
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

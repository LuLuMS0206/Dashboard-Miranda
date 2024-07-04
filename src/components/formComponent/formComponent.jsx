

// export const FormComponent  = () => {
//         return (
//             <form>
//                 <div>
//                     <label htmlFor="fullName">Full Name:</label>
//                     <input
//                         type="text"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="checkIn">Check In:</label>
//                     <input
//                         type="date"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="checkOut">Check Out:</label>
//                     <input
//                         type="date"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="roomNumber">Room Number:</label>
//                     <input
//                         type="text"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="discount">Discount:</label>
//                     <input
//                         type="text"
            
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                         type="tel"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="specialRequest">Special Request:</label>
//                     <textarea
//                         id="specialRequest"
//                     />
//                 </div>
//                 <button type="submit">Crear</button>
//             </form>
//         );
// }
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBooking, createBooking, getBookingById } from '../../assets/features/booking/bookingSlice';
import { ButtonStyles } from '../buttonComponent/buttonComponent';

export const FormComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booking = useSelector(state => getBookingById(state, parseInt(id)));

    const [formData, setFormData] = useState({
        guest: '',
        orderDate: '',
        checkIn: '',
        checkOut: '',
        specialRequest: '',
        roomType: '',
        status: ''
    });

    useEffect(() => {
        if (booking) {
            setFormData(booking);
        }
    }, [booking]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateBooking({ ...formData, id: parseInt(id) }));
        } else {
            dispatch(createBooking(formData));
        }
        navigate('/bookings');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Guest:
                <input type="text" name="guest" value={formData.guest} onChange={handleChange} />
            </label>
            <label>
                Order Date:
                <input type="date" name="orderDate" value={formData.orderDate} onChange={handleChange} />
            </label>
            <label>
                Check In:
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
            </label>
            <label>
                Check Out:
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
            </label>
            <label>
                Special Request:
                <input type="text" name="specialRequest" value={formData.specialRequest} onChange={handleChange} />
            </label>
            <label>
                Room Type:
                <input type="text" name="roomType" value={formData.roomType} onChange={handleChange} />
            </label>
            <label>
                Status:
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="In Progress">In Progress</option>
                    <option value="Check In">Check In</option>
                    <option value="Check Out">Check Out</option>
                </select>
            </label>
            <ButtonStyles type="submit">Save</ButtonStyles>
        </form>
    );
};

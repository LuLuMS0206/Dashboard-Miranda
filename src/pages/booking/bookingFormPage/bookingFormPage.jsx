
import { NavbarComponent } from "./../../../components/navbarComponent/navbarComponent";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBooking, getBookingById } from './../../../assets/features/booking/bookingSlice';
import { ButtonStyles } from './../../../components/buttonComponent/buttonComponent';

export const BookingEditPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booking = useSelector(state => getBookingById(state, id));


    const initialFormData = {
        guest: '',
        orderDate: '',
        checkIn: '',
        checkOut: '',
        specialRequest: '',
        roomType: '',
        status: 'In Progress'
    };

    const [formData, setFormData] = useState(initialFormData);

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
        dispatch(updateBooking(formData)); 
        navigate('/bookings'); 
    };

    return (
        <div>
            <NavbarComponent />
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
        </div>
    );
};

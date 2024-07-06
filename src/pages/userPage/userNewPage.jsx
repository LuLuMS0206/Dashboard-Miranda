import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './../../assets/features/user/userSlice';
import { IoArrowBackSharp } from "react-icons/io5";
import {ButtonStyles} from './../../components/buttonComponent/buttonComponent'

export const UserNewPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        startDate: '',
        description: '',
        email: '',
        contact: '',
        status: 'ACTIVE',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(formData));
        navigate('/users');
    };

    const handleGoTo = () => {
        navigate('/users');
    };

    return (
        <NavbarComponent>
            <div>
                <h2>Add New User</h2>
                <form onSubmit={handleSubmit}>
                <ButtonStyles styled='next' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="id">Employee ID</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contact">Contact</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </select>
                    </div>
                    <button type="submit">Add User</button>
                </form>
            </div>
        </NavbarComponent>
    );
};

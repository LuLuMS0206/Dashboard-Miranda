import React, { useState } from "react";
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, User } from '../../assets/features/user/userSlice'; // Importa User
import { IoArrowBackSharp } from "react-icons/io5";
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { FormStyled, InputFormStyled, LabelFormStyled, SelectFormStyled } from '../../components/styledGeneric/styledGeneric';

export const UserNewPage: React.FC = () => {
    const [formData, setFormData] = useState<User>({
        name: '',
        id: 0,
        startDate: '',
        description: '',
        email: '',
        contact: '',
        status: 'ACTIVE',
        foto: '', // Incluye todas las propiedades de la interfaz User
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'id' ? Number(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                <FormStyled onSubmit={handleSubmit}>
                    <ButtonStyles styled='backForm' onClick={handleGoTo}>
                        <IoArrowBackSharp />
                    </ButtonStyles>

                    <LabelFormStyled htmlFor="name">Full Name</LabelFormStyled>
                    <InputFormStyled
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="id">Employee ID</LabelFormStyled>
                    <InputFormStyled
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="startDate">Start Date</LabelFormStyled>
                    <InputFormStyled
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="description">Description</LabelFormStyled>
                    <InputFormStyled
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="email">Email</LabelFormStyled>
                    <InputFormStyled
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="contact">Contact</LabelFormStyled>
                    <InputFormStyled
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />

                    <LabelFormStyled htmlFor="status">Status</LabelFormStyled>
                    <SelectFormStyled
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                    </SelectFormStyled>

                    <ButtonStyles styled='contact' type="submit">Add User</ButtonStyles>
                </FormStyled>
            </div>
        </NavbarComponent>
    );
};

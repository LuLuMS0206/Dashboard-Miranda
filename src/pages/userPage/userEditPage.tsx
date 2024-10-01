import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, User as UserType, getUserById } from '../../assets/features/user/userSlice';
import { UserThunk } from '../../assets/features/user/userThunk';
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { NavbarComponent } from '../../components/navbarComponent/navbarComponent';
import { FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled, TextAreaStyled } from '../../components/styledGeneric/styledGeneric';
import { RootState, AppDispatch } from './../../store/store';

export const UserEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>(); 
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => id ? getUserById(state, id) : null);

    const initialFormData: UserType = {
        id: '',
        name: '',
        email: '',
        startDate: '',
        description: '',
        contact: '',
        status: 'ACTIVE',
        foto: '',
    };

    const [formData, setFormData] = useState<UserType>(initialFormData);

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editUser(formData));
        navigate('/users');
    };

    const handleGoTo = () => {
        navigate('/users');
    };

    return (
        <NavbarComponent>
            <FormStyled onSubmit={handleSubmit}>
                <ButtonStyles styled='backForm' onClick={handleGoTo}>
                    <IoArrowBackSharp />
                </ButtonStyles>

                {formData.foto && (
                    <div>
                        <img 
                            src={formData.foto} 
                            alt={formData.name} 
                            style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
                        />
                    </div>
                )}
                
                <LabelFormStyled>Full Name:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Employee ID:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    readOnly
                />

                <LabelFormStyled>Start Date:</LabelFormStyled>
                <InputFormStyled
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Description:</LabelFormStyled>
                <TextAreaStyled
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Email:</LabelFormStyled>
                <InputFormStyled
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Contact:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Status:</LabelFormStyled>
                <SelectFormStyled
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                </SelectFormStyled>

                <ButtonStyles styled='contact' type="submit">Save Changes</ButtonStyles>
            </FormStyled>
        </NavbarComponent>
    );
};

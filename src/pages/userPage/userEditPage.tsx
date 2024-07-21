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
    const dispatch = useDispatch<AppDispatch>(); // Tipo correcto para dispatch
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
                <ButtonStyles styled='backForm' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>

                {formData.foto && (
                    <div>
                        <img src={formData.foto} alt={formData.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                    </div>
                )}
                
                <LabelFormStyled>Nombre Completo:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>ID de Empleado:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    readOnly
                />

                <LabelFormStyled>Fecha de Inicio:</LabelFormStyled>
                <InputFormStyled
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Descripción:</LabelFormStyled>
                <TextAreaStyled
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Correo Electrónico:</LabelFormStyled>
                <InputFormStyled
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Contacto:</LabelFormStyled>
                <InputFormStyled
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />

                <LabelFormStyled>Estado:</LabelFormStyled>
                <SelectFormStyled
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="ACTIVE">Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                </SelectFormStyled>

                <ButtonStyles styled='contact' type="submit">Guardar Cambios</ButtonStyles>
            </FormStyled>
        </NavbarComponent>
    );
};

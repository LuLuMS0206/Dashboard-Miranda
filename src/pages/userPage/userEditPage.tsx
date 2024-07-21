import React, { useEffect, useState } from 'react';
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, User as UserType, getUser } from '../../assets/features/user/userSlice';
import { IoArrowBackSharp } from "react-icons/io5";
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { FormStyled, LabelFormStyled, InputFormStyled, SelectFormStyled } from '../../components/styledGeneric/styledGeneric';
import { RootState } from '../../store/store';

export const UserEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state: RootState) => state.users.users);


    const initialFormData: UserType = {
        id: 0,
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
        if (users && id) {
            const user = users.find(user => user.id === Number(id));
            if (user) {
                setFormData(user);
            }
        }
    }, [users, id]);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
            <div>
                <FormStyled onSubmit={handleSubmit}>
                    <ButtonStyles styled='backForm' onClick={handleGoTo}>
                        <IoArrowBackSharp />
                    </ButtonStyles>
                    {formData.foto && (
                        <div>
                            <img src={formData.foto} alt={formData.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                        </div>
                    )}
                    <LabelFormStyled>
                        Nombre Completo:
                        <InputFormStyled
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        ID de Empleado:
                        <InputFormStyled
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                            readOnly
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Fecha de Inicio:
                        <InputFormStyled
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Descripción:
                        <InputFormStyled
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Correo Electrónico:
                        <InputFormStyled
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Contacto:
                        <InputFormStyled
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </LabelFormStyled>
                    <LabelFormStyled>
                        Estado:
                        <SelectFormStyled
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="ACTIVE">Activo</option>
                            <option value="INACTIVE">Inactivo</option>
                        </SelectFormStyled>
                    </LabelFormStyled>
                    <ButtonStyles styled='contact' type="submit">Guardar Cambios</ButtonStyles>
                </FormStyled>
            </div>
        </NavbarComponent>
    );
};

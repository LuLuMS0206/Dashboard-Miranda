import { NavbarComponent } from "./../../components/navbarComponent/navbarComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, selectUserById } from './../../assets/features/user/userSlice';
import { IoArrowBackSharp } from "react-icons/io5";
import { ButtonStyles } from './../../components/buttonComponent/buttonComponent'
import { SelectFormStyled, FormStyled, LabelFormStyled, InputFormStyled } from './../../components/styledGeneric/styledGeneric'

export const UserEditPage = () => {
    const { id } = useParams();
    const user = useSelector(state => selectUserById(state, id));
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

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
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
                    <ButtonStyles styled='backForm' onClick={handleGoTo}><IoArrowBackSharp /></ButtonStyles>

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
                        type="text"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                        readOnly
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

                    <ButtonStyles styled='contact' type="submit">Save Changes</ButtonStyles>
                </FormStyled>
            </div>
        </NavbarComponent>
    );
};

import React, { useContext, FormEvent } from "react";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { InputStyled, LoginStyles, FormStyles, TitleStyles, LabelStyles } from "./loginStyles";
import { useNavigate } from "react-router-dom";
import { UserContext, useUserContext } from '../../context/userContext'; 

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useUserContext();

    const HandlerLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = 'dashboardMiranda@admin.com';
        const password = 'miranda00';

        const form = event.currentTarget;
        const enteredUsername = (form.elements.namedItem('username') as HTMLInputElement).value;
        const enteredPassword = (form.elements.namedItem('password') as HTMLInputElement).value;

        if (username === enteredUsername && password === enteredPassword) {
            dispatch({ type: "LOGIN", payload: { name: 'Admin', email: username } });
            navigate('/');
        } else {
            alert('Username or password incorrect');
        } 
    };

    return (
        <LoginStyles>
            <img src="src/assets/img/logo.png" alt="Logo" />
            <TitleStyles>Login</TitleStyles>

            <FormStyles onSubmit={HandlerLogin}>
                <LabelStyles>Username</LabelStyles>
                <InputStyled type="text" id="username" name="username" placeholder="Your username" />
                <LabelStyles>Password</LabelStyles>
                <InputStyled type="password" id="password" name="password" placeholder="Your password" autoComplete="true" />
                <ButtonStyles styled="login" type="submit">Login</ButtonStyles>
                <p>username: dashboardMiranda@admin.com</p>
                <p>| password: miranda00</p>
            </FormStyles>
        </LoginStyles>
    );
};

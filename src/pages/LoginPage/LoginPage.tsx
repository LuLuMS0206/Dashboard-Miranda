
import React, { FormEvent } from "react";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { InputStyled, LoginStyles, FormStyles, TitleStyles, LabelStyles } from "./loginStyles";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../context/userContext'; 

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { dispatch } = useUserContext();

    const HandlerLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const enteredUsername = (form.elements.namedItem('username') as HTMLInputElement).value;
        const enteredPassword = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const response = await fetch('http://localhost:3001/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: enteredUsername,
                    password: enteredPassword
                })
            });
            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();

            if (data.token) {
                localStorage.setItem('authToken', data.token);

                dispatch({ type: "LOGIN", payload: { name: 'Admin', email: enteredUsername } });

                navigate('/');
            } else {
                alert('Error al recibir el token');
            }
        } catch (error) {
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

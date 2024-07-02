
import { useContext } from "react";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent.js";
import { InputStyled, LoginStyles, FormStyles, TitleStyles, LabelStyles } from "./loginStyles.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext.jsx'; 

export const LoginPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    const HandlerLogin = (event) => {
        event.preventDefault();
        let username = 'dashboardMiranda@admin.com';
        let password = 'miranda00';

        if (username === event.target.username.value && password === event.target.password.value) {
            dispatch({ type: "LOGIN", payload: { name: 'Admin', email: username } });
            navigate('/');
        } else {
            alert('username or password incorrect');
        } 
    };

    return (
        <LoginStyles>
            <img src="src/assets/img/logo.png" alt="" />
            <TitleStyles>Login</TitleStyles>

            <FormStyles onSubmit={HandlerLogin}>
                <LabelStyles>Username</LabelStyles>
                <InputStyled type="text" id="username" placeholder="Your username" />
                <LabelStyles>Password</LabelStyles>
                <InputStyled type="password" id="password" placeholder="Your password" autoComplete="true" />
                <ButtonStyles styled="login" type="submit">Login</ButtonStyles>
                <p>username: dashboardMiranda@admin.com</p>
                <p>| password: miranda00</p>
            </FormStyles>
        </LoginStyles>
    );
};

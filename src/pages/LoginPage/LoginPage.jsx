import { ButtonStyles } from "../../components/buttonComponent/buttonComponent.js"
import { InputStyled } from "./loginStyles.js"
import { LoginStyles } from "./loginStyles.js"
import { FormStyles } from "./loginStyles.js"
import { TitleStyles } from "./loginStyles.js"
import { LabelStyles } from "./loginStyles.js"
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();

    const HandlerLogin = (event) => {
        event.preventDefault();
        let username = 'dashboardMiranda@admin.com';
        let password = 'miranda00';

        if (username === event.target.username.value && password === event.target.password.value) {
            localStorage.setItem('login', 'true');
            navigate('/navbarComponent');
        } else {
            alert('username or password incorrect');
        } 
    }

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


    )
}


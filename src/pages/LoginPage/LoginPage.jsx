import { InputStyled } from "./loginStyles.js"
import { LoginStyles } from "./loginStyles.js"
import { FormStyles } from "./loginStyles.js"
import { ButtonStyles } from "./loginStyles.js"
import { TitleStyles } from "./loginStyles.js"
import { LabelStyles } from "./loginStyles.js"

export const LoginPage = () => {


    return (
        <LoginStyles>
            <img src="src/assets/img/logo.png" alt="" />
            <TitleStyles>Login</TitleStyles>

            <FormStyles >
                <LabelStyles>Username</LabelStyles>
                <InputStyled type="text" id="username" placeholder="Your username" />
                <LabelStyles>Password</LabelStyles>
                <InputStyled type="password" id="password" placeholder="Your password" autoComplete="true" />
                <ButtonStyles type="submit">Login</ButtonStyles>
                <p>username: dashboardMiranda@admin.com</p>
                <p>| password: miranda00</p>
            </FormStyles>
        </LoginStyles>


    )
}


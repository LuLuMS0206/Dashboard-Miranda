
import './styles.css';

export const LoginPage = () => {

    return (
        <>
            <h1 className='login__title'>Login</h1>
            <form >
                <label>Username</label>
                <input type="text" id="username" placeholder="Your username"/>
                <label>Password</label>
                <input type="password" id="password" placeholder="Your password" autoComplete="true"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}


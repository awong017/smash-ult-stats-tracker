import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../LoginNav/loginNav';
import './login.css';

const login = ({ handleLogin, usernameError, passwordError }) => {

    const [loginState, setState] = useState("")

    const loginInfo = (username, password) => {
        setState({
            username: username,
            password: password
        });
    }

    const { username, password } = loginState;

    return (
        <div className="login">
            <LoginNav />
            <form className="login-form" onSubmit={(e) => handleLogin(e, username, password)}>
                <legend><h2>Login</h2></legend>
                <fieldset className="login-input">
                    <label className="name-label">User Name</label>
                    <input className="name-input" type="text" placeholder="User Name" onChange={(e) => loginInfo(e.target.value, password)}></input>
                    <div className="input-error">{usernameError}</div>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="password" placeholder="Password" onChange={(e) => loginInfo(username, e.target.value)}></input>
                    <div className="input-error">{passwordError}</div>

                    <input type="submit" className="login-button" value="Login" />
                </fieldset>
                <fieldset className="login-option">
                    <Link to={'/password'}>
                        Forgot your password?
                    </Link>
                    <Link to={'/signup'}>
                        Sign Up
                    </Link>
                </fieldset>
            </form>
        </div>
    )
}

export default login;
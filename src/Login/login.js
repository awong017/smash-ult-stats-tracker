import React from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../LoginNav/loginNav';
import './login.css';

const login = ({ handleLogin }) => {
    return (
        <div className="login">
            <LoginNav />
            <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                <legend><h2>Login</h2></legend>
                <fieldset className="login-input">
                    <label className="name-label">User Name</label>
                    <input className="name-input" type="text" placeholder="User Name"></input>
                    <div className="input-error"></div>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="password" placeholder="Password"></input>
                    <div className="input-error"></div>

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
import React from 'react';
import LoginNav from '../LoginNav/loginNav';
import './login.css';

const login = () => {
    return (
        <div className="login">
            <LoginNav />
            <form className="login-form">
                <legend><h2>Login</h2></legend>
                <fieldset className="login-input">
                    <label className="name-label">User Name</label>
                    <input className="name-input" type="text" placeholder="User Name"></input>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="text" placeholder="Password"></input>

                    <button className="login-button">Login</button>
                </fieldset>
                <fieldset className="login-option">
                    <p>Forgot your password?</p>
                    <p>Sign Up</p>
                </fieldset>
            </form>
        </div>
    )
}

export default login;
import React from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../LoginNav/loginNav';
import './login.css';

const login = ({ data }) => {
    return (
        <div className="login">
            <LoginNav />
            <form className="login-form">
                <legend><h2>Login</h2></legend>
                <fieldset className="login-input">
                    <label className="name-label">User Name</label>
                    <input className="name-input" type="text" placeholder="User Name"></input>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="password" placeholder="Password"></input>

                    <button className="login-button">Login</button>
                </fieldset>
                <fieldset className="login-option">
                    <Link to={'/password'}>
                        Forgot your password?
                    </Link>
                    <Link to={'/signup'}>
                        Sign Up
                    </Link>
                    <button onClick={() => console.log("Hello")}>Console Log</button>
                </fieldset>
            </form>
        </div>
    )
}

export default login;
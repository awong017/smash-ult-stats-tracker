import React from 'react';
import LoginNav from '../LoginNav/loginNav';
import './login.css';

const login = () => {
    return (
        <div className="login">
            <LoginNav />
            <h1 className="login-header">This is the login page</h1>
        </div>
    )
}

export default login;
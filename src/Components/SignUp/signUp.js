import React, { useState, useContext } from 'react';
import LandingNav from '../LandingNav/landingNav';
import Context from '../../context';
import './signUp.css';

const signUp = () => {
    const { handleSignup, emailError, usernameError, passwordError } = useContext(Context);

    const [signupState, setState] = useState('');

    const signUpInfo = (email, username, password1, password2) => {
        setState({
            email: email,
            username: username,
            password1: password1,
            password2: password2
        });
    };

    const { email, username, password1, password2 } = signupState;

    return (
        <div className="sign-up">
            <LandingNav />
            <form className="sign-up-form" onSubmit={(e) => handleSignup(e, email, username, password1, password2)}>
                <legend><h2>Create Account</h2></legend>
                <fieldset className="sign-up-input">
                    <label className="email-label">Email</label>
                    <input className="email-input" type="text" onChange={(e) => signUpInfo(e.target.value, username, password1, password2)}></input>
                    <div className="input-error">{emailError}</div>

                    <label className="name-label">Desired User Name</label>
                    <input className="name-input" type="text" onChange={(e) => signUpInfo(email, e.target.value, password1, password2)}></input>
                    <div className="input-error">{usernameError}</div>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="password" onChange={(e) => signUpInfo(email, username, e.target.value, password2)}></input>

                    <label className="confirm-label">Confirm Password</label>
                    <input className="confirm-input" type="password" onChange={(e) => signUpInfo(email, username, password1, e.target.value)}></input>
                    <div className="input-error">{passwordError}</div>

                    <input type="submit" className="signup-button" value="Sign Up"></input>
                </fieldset>
            </form>
        </div>
    );
};

export default signUp;
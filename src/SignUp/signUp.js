import React from 'react';
import './signUp.css'
import LandingNav from '../LandingNav/landingNav';

const signUp = () => {
    return (
        <div className="sign-up">
            <LandingNav />
            <form className="sign-up-form">
                <legend><h2>Create Account</h2></legend>
                <fieldset className="sign-up-input">
                    <label className="email-label">Email</label>
                    <input className="email-input" type="text"></input>

                    <label className="name-label">Desired User Name</label>
                    <input className="name-input" type="text"></input>

                    <label className="password-label">Password</label>
                    <input className="password-input" type="password"></input>

                    <label className="confirm-label">Confirm Password</label>
                    <input className="confirm-input" type="password"></input>

                    <button className="sign-up-button">Sign Up</button>
                </fieldset>
            </form>
        </div>
    )
}

export default signUp;
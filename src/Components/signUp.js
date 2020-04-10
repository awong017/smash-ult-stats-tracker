import React, { useState, useContext } from 'react';
import LandingNav from './landingNav';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const SignUp = Styled.div`

    .sign-up-form {
        background-color: ${(props) => props.theme.formColor};
        border: 3px solid black;
        border-radius: 10px;
        margin-top: 300px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px 20px;
        width: 225px;;

        legend {
            text-align: center;
            color: white;
        }

        fieldset {
            border: 2px solid black;
            margin-bottom: 10px;
        }

        label {
            display: block;
            color: #787878;
            margin-top: 25px;
        }

        input {
            background-color: #525151;
            color: white;
            border: 2px solid #525151;
        }

        .input-error {
            color: ${(props) => props.theme.errorColor};
        }

        .signup-button {
            display: block;
            color: white;
            padding: 5px 10px;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid black;
            margin-top: 50px;

            &:hover {
                cursor: pointer;
                background-color: ${(props) => props.theme.hoverColor};
                transition: 0.1s;
            }
        }
    }
`

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
        <ThemeProvider theme={GlobalStyles}>
            <SignUp>
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
            </SignUp>
        </ThemeProvider>
    );
};

export default signUp;
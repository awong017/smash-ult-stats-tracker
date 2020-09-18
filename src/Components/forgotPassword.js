import React, { useState, useContext } from 'react';
import LandingNav from './landingNav';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const ForgotPassword = Styled.div`
    .forgot-password-form {
        background-color: ${(props) => props.theme.formColor};
        border: 2px solid black;
        border-radius: 10px;
        margin-top: 300px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px 20px;
        width: 224px;;

        legend {
            text-align: center;
            color: white;
        }

        fieldset {
            border: 2px solid black;
            border-radius: 10px;
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

        .email-button {
            display: block;
            color: white;
            padding: 4px 8px;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid black;
            border-radius: 5px;
            margin-top: 50px;

            &:hover {
                cursor: pointer;
                background-color: ${(props) => props.theme.hoverColor};
                transition: 0.1s;
            }
        }
    }
`

const forgotPassword = () => {
    const { retrievePassword, emailError } = useContext(Context);

    const [forgotPasswordState, setState] = useState('');

    const forgotPasswordInfo = (email) => {
        setState({
            email: email
        });
    };

    const { email } = forgotPasswordState;

    return (
        <ThemeProvider theme={GlobalStyles}>
            <ForgotPassword>
                <LandingNav />
                <form className="forgot-password-form" onSubmit={(e) => retrievePassword(e, email)}>
                    <legend><h2>Forgot your login info? No worries, we can send an email with all login details!</h2></legend>
                    <fieldset className="forgot-password-input">
                        <label className="email-label">Email</label>
                        <input className="email-input" type="text" onChange={(e) => forgotPasswordInfo(e.target.value)}></input>
                        <div className="input-error">{emailError}</div>

                        <div className="button">
                            <input type="submit" className="email-button" value="Send Email"></input>
                        </div>
                    </fieldset>
                </form>
            </ForgotPassword>
        </ThemeProvider>
    );
};

export default forgotPassword;
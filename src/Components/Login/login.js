import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../LoginNav/loginNav';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const Login = Styled.div`
    .login-form {
        background-color: #303030;
        border: 2px solid black;
        border-radius: 10px;
        margin-top: 300px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px 20px;
        width: 225px;
        @media screen and (max-width: ${(props) => props.theme.halfScreen}) {
            width: 225px;
        }

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

        .login-button {
            display: block;
            width: 50px;
            text-align: center;
            color: white;
            font-size: 14px;
            padding: 2px 0px;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid black;
            margin-top: 25px;

            &:hover {
                cursor: pointer;
                background-color: #8a0000;
                transition: 0.1s;
            }
        }

        a {
            display: block;
            color: ${(props) => props.theme.linkColor};
            text-decoration: none;
            margin-top: 10px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;

const login = () => {
    const { handleLogin, usernameError, passwordError } = useContext(Context);

    const [loginState, setState] = useState('');

    const loginInfo = (username, password) => {
        setState({
            username: username,
            password: password
        });
    };

    const { username, password } = loginState;

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Login>
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
            </Login>
        </ThemeProvider>
    );
};

export default login;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from './loginNav';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Login = Styled.div`
    .login-form {
        background-color: ${(props) => props.theme.formColor};
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
            margin-bottom: 10px;
            border: 2px solid black;
            border-radius: 10px;
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

        p {
            color: white;
        }

        .login-button {
            display: block;
            width: 50px;
            text-align: center;
            color: white;
            font-size: 14px;
            padding: 4px 0px;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid black;
            border-radius: 5px;
            margin-top: 24px;

            &:hover {
                cursor: pointer;
                background-color: ${(props) => props.theme.hoverColor};
                transition: 0.1s;
            }
        }

        a {
            display: block;
            color: ${(props) => props.theme.linkColor};
            text-decoration: none;
            margin-top: 8px;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .login-form {
            margin-top: 200px; 
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
                        <input className="name-input" type="text" onChange={(e) => loginInfo(e.target.value, password)}></input>
                        <div className="input-error">{usernameError}</div>

                        <label className="password-label">Password</label>
                        <input className="password-input" type="password" onChange={(e) => loginInfo(username, e.target.value)}></input>
                        <div className="input-error">{passwordError}</div>

                        <input type="submit" className="login-button" value="Login" />
                    </fieldset>
                    <fieldset className="login-option">
                        {/* <Link to={'/forgotPassword'}>
                            Forgot your password?
                        </Link> */}
                        <p>Not a user yet?</p>
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
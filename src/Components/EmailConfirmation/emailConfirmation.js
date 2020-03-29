import React from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../LoginNav/loginNav';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const EmailConfirmation = Styled.div`
    margin-top: 350px;
    color: ${(props) => props.theme.bodyColor};
    text-align: center;

    a {
        text-decoration: underline;
        color: ${(props) => props.theme.linkColor};

        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.hoverColor};
        }
    }
`;

const emailConfirmation = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <LoginNav />
            <EmailConfirmation>
                <h2>Email has been sent!</h2>
                <Link to={'/login'}>
                    Proceed to login page
                </Link>
            </EmailConfirmation>
        </ThemeProvider>
    )
}

export default emailConfirmation;
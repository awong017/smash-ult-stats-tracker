import React from 'react';
import LandingNav from '../LandingNav/landingNav';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const H1 = Styled.h1`
    text-align: center;
    color: ${(props) => props.theme.bodyColor};
    margin-top: 200px;
`;

const landing = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <div className="landing">
                <LandingNav />
                <H1>This is the landing page</H1>
            </div>
        </ThemeProvider>
    );
};

export default landing;
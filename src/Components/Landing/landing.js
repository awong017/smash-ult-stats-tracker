import React from 'react';
import LandingNav from '../LandingNav/landingNav';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const Landing = Styled.div`
    h1 {
        text-align: center;
        color: ${(props) => props.theme.bodyColor};
        margin-top: ${(props) => props.theme.marginTop};
    }  
`;

const landing = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Landing>
                <LandingNav />
                <h1>Landing Page Component</h1>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
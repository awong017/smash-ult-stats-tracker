import React, { useState } from 'react';
import LandingNav from './landingNav';
import LandingList from './landingList';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

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
                <LandingList />
                <button onClick={() => console.log(redditData)}>Reddit</button>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
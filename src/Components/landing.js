import React from 'react';
import LandingNav from './landingNav';
import LandingList from './landingList';
import TopPlayers from './topPlayers';
import TopCharacters from './topCharacters';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Landing = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    color: white;
    text-align: center;
 
    .landing-content {
        display: flex;
        justify-content: space-between;
    }
`;

const landing = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Landing>
                <LandingNav />
                <div className="landing-content">
                    <LandingList />
                    <div className="rankings">
                        <h2>Current Rankings</h2>
                        <TopPlayers />
                        <TopCharacters />
                    </div>
                </div>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
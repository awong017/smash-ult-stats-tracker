import React, { useContext } from 'react';
import HomeNav from './homeNav';
import PlayerStats from './playerStats';
import TopPlayers from './topPlayers';
import TopCharacters from './topCharacters';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Home = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    border: 2px solid white;
    padding-left: 24px;
    padding-right: 24px;
    color: ${(props => props.theme.bodyColor)};
   

    .home-content {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 500px) {
        .home-content {
            display: block;
        }
    }
`

const home = () => {
    const context = useContext(Context);

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <HomeNav />
                <h1>Hey {context.currentUser.username}</h1>
                <section className="home-content">
                    <PlayerStats />
                    <section className="global-standings">
                        <TopPlayers />
                        <TopCharacters />
                    </section>
                </section>
            </Home>
        </ThemeProvider>
    );
};

export default home;

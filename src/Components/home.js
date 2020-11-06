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
    padding-left: 24px;
    padding-right: 24px;
    color: ${(props => props.theme.bodyColor)};

    .home-content {
        display: flex;
        justify-content: space-between;

        .rankings {
            width: 300px;
        }
    }

    @media screen and (max-width: 500px) {

        h1 {
            text-align: center;
        }

        .home-content {
            display: block;

            .rankings {
                width: initial;
            }
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
                    <section className="rankings">
                        <TopPlayers />
                        <TopCharacters />
                    </section>
                </section>
            </Home>
        </ThemeProvider>
    );
};

export default home;

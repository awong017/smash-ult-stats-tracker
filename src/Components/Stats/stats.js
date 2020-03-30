import React, { useContext } from 'react';
import StatsNav from '../StatsNav/statsNav';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';
import Pikachu from '../../Images/Avatars/pikachu.jpg';
import Luigi from '../../Images/Avatars/luigi.jpg';

const Stats = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    color: ${(props) => props.theme.bodyColor};
    text-align: center;

    h1 {
        margin-bottom: 100px;
    }

    .character-select {
        margin-bottom: 150px;
    }

    .character-flex {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding-left: 40px;
        padding-right: 40px;

        .player {
            width: 200px;
            border: 3px solid red;
            border-radius: 50%;
        }

        .display-record {
            padding-top: 50px;
        }

        .opponent {
            width: 200px;
            border: 3px solid blue;
            border-radius: 50%;
        }
    }

    .graph {
        margin-top: 100px;
    }
`

const stats = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Stats>
                <StatsNav />
                <h1>This is the stats page</h1>
                <div className="character-select">
                    <h2>Character Select Component Here</h2>
                </div>
                <ul className="character-flex">
                    <li>
                        <img className="player" src={Pikachu} />
                        <h2>Player</h2>      
                    </li>
                    <li className="display-record">
                        <h2>Display Record Component Here</h2>
                    </li>
                    <li>
                        <img className="opponent" src={Luigi} />
                        <h2>Opponent</h2>
                    </li>
                </ul>
                <div className="graph">
                    <h2>Display Graph Component Here</h2>
                </div>
            </Stats>
        </ThemeProvider>
    );
};

export default stats;
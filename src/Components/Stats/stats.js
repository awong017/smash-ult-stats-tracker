import React, { useContext } from 'react';
import StatsNav from '../StatsNav/statsNav';
import CharacterSelect from '../CharacterSelect/characterSelect';
import DisplayRecord from '../MatchupRecord/matchupRecord';
import AllTimeRecordGraph from '../AllTimeRecordGraph/allTimeRecordGraph';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';
import Pikachu from '../../Images/Avatars/pikachu.jpg';
import Luigi from '../../Images/Avatars/luigi.jpg';

const Stats = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    color: ${(props) => props.theme.bodyColor};
    text-align: center;

    .character-flex {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding-left: 40px;
        padding-right: 40px;

        .player {
            width: 200px;
            border: 3px solid red;
            border-radius: 50%;
        }

        .opponent {
            width: 200px;
            border: 3px solid blue;
            border-radius: 50%;
        }
    }
`

const stats = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Stats>
                <StatsNav />
                <CharacterSelect />
                <ul className="character-flex">
                    <li>
                        <h2>Player</h2>
                        <img className="player" src={Pikachu} />
                        <h2>Pikachu</h2>      
                    </li>
                    <li>
                       <DisplayRecord />
                    </li>
                    <li>
                        <h2>Opponent</h2>
                        <img className="opponent" src={Luigi} />
                        <h2>Luigi</h2>
                    </li>
                </ul>
                <AllTimeRecordGraph />
            </Stats>
        </ThemeProvider>
    );
};

export default stats;
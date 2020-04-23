import React, { useContext } from 'react';
import StatsNav from './statsNav';
import CharacterSelect from './characterSelect';
import MatchupRecord from './matchupRecord';
import MatchupHistory from './matchupHistory';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

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
            padding-top: 100px;
        }

        .opponent {
            padding-top: 100px;
        }

        img {
            width: 200px;
            border-radius: 50%;

            &:hover {
                cursor: pointer;
                border: 4px solid white;
            }
        }

        .not-selected {
            border: none;
        }

        .selected {
            border: 4px solid white;
        }
    }
`

const stats = () => {
    const { competitor, updateCompetitor, playerCharacter, opponentCharacter, getCurrentMatchup, getMatchupRecord } = useContext(Context)

    const highlightPlayer = (fighter) => {
        if (fighter === "player") {
            return "selected"
        }
        else {
            return "not-selected"
        }
    }

    const highlightOpponent = (fighter) => {
        if (fighter === "opponent") {
            return "selected"
        }
        else {
            return "not-selected"
        }
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Stats>
                <StatsNav />
                <CharacterSelect />
                <ul className="character-flex">
                    <li className="player">
                        <h2>Player</h2>
                        <img className={highlightPlayer(competitor)}
                            src={require(`../Images/Avatars/${playerCharacter.img}`)} 
                            onClick={() => {updateCompetitor({competitor: "player"}); getCurrentMatchup(); getMatchupRecord()}}
                            />
                        <h2>{playerCharacter.name}</h2>      
                    </li>
                    <li>
                       <MatchupRecord />
                    </li>
                    <li className="opponent">
                        <h2>Opponent</h2>
                        <img className={highlightOpponent(competitor)}
                            src={require(`../Images/Avatars/${opponentCharacter.img}`)} 
                            onClick={() => {updateCompetitor({competitor: "opponent"}); getCurrentMatchup(); getMatchupRecord()}}
                            />
                        <h2>{opponentCharacter.name}</h2>
                    </li>
                </ul>
                <MatchupHistory />
            </Stats>
        </ThemeProvider>
    );
};

export default stats;
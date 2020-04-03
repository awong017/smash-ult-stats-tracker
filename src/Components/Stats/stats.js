import React, { useContext } from 'react';
import StatsNav from '../StatsNav/statsNav';
import CharacterSelect from '../CharacterSelect/characterSelect';
import DisplayRecord from '../MatchupRecord/matchupRecord';
import AllTimeRecordGraph from '../AllTimeRecordGraph/allTimeRecordGraph';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

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
    const { competitor, updateCompetitor, playerCharacter, opponentCharacter, getMatchupRecord } = useContext(Context)

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
                    <li>
                        <h2>Player</h2>
                        <img className={highlightPlayer(competitor)}
                            src={require(`../../Images/Avatars/${playerCharacter.img}`)} 
                            onClick={() => {updateCompetitor({competitor: "player"}); getMatchupRecord()}}
                            />
                        <h2>{playerCharacter.name}</h2>      
                    </li>
                    <li>
                       <DisplayRecord />
                    </li>
                    <li>
                        <h2>Opponent</h2>
                        <img className={highlightOpponent(competitor)}
                            src={require(`../../Images/Avatars/${opponentCharacter.img}`)} 
                            onClick={() => {updateCompetitor({competitor: "opponent"}); getMatchupRecord()}}
                            />
                        <h2>{opponentCharacter.name}</h2>
                    </li>
                </ul>
                <AllTimeRecordGraph />
            </Stats>
        </ThemeProvider>
    );
};

export default stats;
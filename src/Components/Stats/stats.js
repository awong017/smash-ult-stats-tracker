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

        .player {
            width: 200px;
            border: 3px solid red;
            border-radius: 50%;

            &:hover {
                cursor: pointer
            }
        }

        .opponent {
            width: 200px;
            border: 3px solid blue;
            border-radius: 50%;

            &:hover {
                cursor: pointer
            }
        }
    }
`

const stats = () => {
    const { toggleCompetitor, playerCharacter, opponentCharacter } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Stats>
                <StatsNav />
                <CharacterSelect />
                <ul className="character-flex">
                    <li>
                        <h2>Player</h2>
                        <img className="player" 
                            src={require(`../../Images/Avatars/${playerCharacter.img}.jpg`)} 
                            onClick={() => toggleCompetitor()}
                            />
                        <h2>{playerCharacter.name}</h2>      
                    </li>
                    <li>
                       <DisplayRecord />
                    </li>
                    <li>
                        <h2>Opponent</h2>
                        <img className="opponent" 
                            src={require(`../../Images/Avatars/${opponentCharacter.img}.jpg`)} 
                            onClick={() => toggleCompetitor()}
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
import React, { useContext } from 'react';
import AddStatsNav from './addStatsNav';
import CharacterSelect from './characterSelect';
import MatchupRecord from './matchupRecord';
import MatchupHistory from './matchupHistory';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const AddStats = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    color: ${(props) => props.theme.bodyColor};
    text-align: center;

    .add-stats-content {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;

        .matchup {
            display: flex;
            justify-content: between;
            margin-top: 0px;
            padding-left: 0px;
            list-style: none;
            
            .player {
                padding-top: 100px;
                padding-right: 24px;
            }
    
            .opponent {
                padding-top: 100px;
                padding-left: 24px;
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
    }

    @media screen and (max-width: 1728px) {
        .add-stats-content {
            display: block;
            padding-left: 0px;
            padding-right: 0px;

            .matchup {
                justify-content: space-around;

                .player {
                    padding-top: 100px;
                    padding-right: 0px;

                    h2 {
                        font-size: 18px;
                    }
                }
        
                .opponent {
                    padding-top: 100px;
                    padding-left: 0px;

                    h2 {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 500px) {
        .add-stats-content {
            
            .matchup {

                .player {
                    
                }
                
                img {
                    width: 70px;
                }
            }
        }
    }
`

const addStats = () => {
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
            <AddStats>
                <AddStatsNav />
                <div className="add-stats-content">
                    <CharacterSelect />
                    <ul className="matchup">
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
                </div>
                <MatchupHistory />
            </AddStats>
        </ThemeProvider>
    );
};

export default addStats;
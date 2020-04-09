import React, { useContext } from 'react';
import MatchupRecordFilter from '../MatchupRecordFilter/matchupRecordFilter';
import MatchupRecordGraph from '../MatchupRecordGraph/matchupRecordGraph';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecord = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    ul {
        display: flex;
        justify-content: space-around;
        padding-left: 0px;

        li {
            list-style: none;
        }

        .increment {
            display: flex;
            flex-direction: flex-column;
            justify-content: space-between;

            button {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                color: white;
                border: 1px solid white;
                background: transparent;

                &:hover {
                    cursor: pointer;
                    color: black;
                    background: white;
                }
            }
        }

        .percent {
            display: block;
           
        }

        .percent-hidden {
            display: none;
        }
    }
`

const matchupRecord = () => {
    const { matches, matchupRecord, addWins, addLosses } = useContext(Context)
    const { wins, losses } = matchupRecord
    const winPercent = (((wins)/(wins + losses)) * 100).toFixed(2)
    const lossPercent = (((losses)/(losses + wins)) * 100).toFixed(2)

    const hidePercent = () => {
        if (wins === 0 && losses === 0) {
            return "percent-hidden"
        }
        else {
            return "percent"
        }
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecord>
                <h2>Matchup Record Component</h2>
                <MatchupRecordFilter />
                <MatchupRecordGraph />
                <ul>
                    <li>
                        <h3>Wins</h3>
                        <p>{wins}</p>
                        <div className="increment">
                            <button className="add" onClick={() => addWins()}>+</button>
                            <button className="subtract">-</button>
                        </div>
                        <p>({winPercent}%)</p>
                    </li>
                    <li>
                        <h3>Losses</h3>
                        <p>{losses}</p>
                        <div className="increment">
                            <button className="add" onClick={() => addLosses()}>+</button>
                            <button className="subtract">-</button>
                        </div>
                        <p>({lossPercent}%)</p>
                    </li>
                </ul>
                <button onClick={() => console.log("Matches: ", matches)}>Console Log</button> 
            </MatchupRecord>
        </ThemeProvider>
    )
}

export default matchupRecord;
import React, { useContext } from 'react';
import MatchupRecordFilter from './matchupRecordFilter';
import MatchupRecordGraph from './matchupRecordGraph';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

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
    const { matches, currentMatchup, filteredMatchup, matchupRecord, timeFrame, addWins, subtractWins, addLosses, subtractLosses } = useContext(Context)
    const { wins, losses } = matchupRecord
    const winPercent = (((wins)/(wins + losses)) * 100).toFixed(1)
    const lossPercent = (((losses)/(losses + wins)) * 100).toFixed(1)

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
                        <p>({winPercent}%)</p>
                        <div className="increment">
                            <button className="add" onClick={() => addWins()}>+</button>
                            <button className="subtract" onClick={() => subtractWins()}>-</button>
                        </div>
                    </li>
                    <li>
                        <h3>Losses</h3>
                        <p>{losses}</p>
                        <p>({lossPercent}%)</p>
                        <div className="increment">
                            <button className="add" onClick={() => addLosses()}>+</button>
                            <button className="subtract" onClick={() => subtractLosses()}>-</button>
                        </div>
                    </li>
                </ul>
            </MatchupRecord>
        </ThemeProvider>
    )
}

export default matchupRecord;
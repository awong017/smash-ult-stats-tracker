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
                border: 1px solid white;
                border-radius: 50%;
                width: 20px;
                color: white;
                background: transparent;

                &:hover {
                    cursor: pointer;
                    background: white;
                    color: black;
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
    const { matchupRecord, addWins, subtractWins, addLosses, subtractLosses } = useContext(Context)
    const { wins, losses } = matchupRecord
    const winPercent = (((wins)/(wins + losses)) * 100).toFixed(1)
    const lossPercent = (((losses)/(losses + wins)) * 100).toFixed(1)

    const hidePercent = () => {
        if (wins === undefined && losses === undefined) {
            return "percent-hidden"
        }
        else {
            return "percent"
        }
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecord>
                <h2>Matchup Record</h2>
                <MatchupRecordFilter />
                <MatchupRecordGraph />
                <ul>
                    <li>
                        <h3>Wins</h3>
                        <p>{wins}</p>
                        <p className={hidePercent()}>({winPercent}%)</p>
                        <div className="increment">
                            <button className="add" onClick={() => addWins()}>+</button>
                            <button className="subtract" onClick={() => subtractWins()}>-</button>
                        </div>
                    </li>
                    <li>
                        <h3>Losses</h3>
                        <p>{losses}</p>
                        <p className={hidePercent()}>({lossPercent}%)</p>
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
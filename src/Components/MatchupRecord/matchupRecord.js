import React, { useContext } from 'react';
import MatchupRecordFilter from '../MatchupRecordFilter/matchupRecordFilter';
import MatchupRecordGraph from '../MatchupRecordGraph/matchupRecordGraph';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecord = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    border: 2px solid white;

    ul {
        display: flex;
        justify-content: space-around;
        padding-left: 0px;

        li {
            list-style: none;
        }

        .win-rate {
            padding-top: 25px;
        }

        win-rate-hidden {
            display: none;
        }
    }
`

const matchupRecord = () => {
    const { matchupRecord } = useContext(Context)
    const { wins, losses } = matchupRecord
    const winPercent = (((wins)/(wins + losses)) * 100).toFixed(2)

    const hideWinPercent = () => {
        if (wins === 0 && losses === 0) {
            return "win-rate-hidden"
        }
        else {
            return "win-rate"
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
                    </li>
                    <li className="win-rate">
                        <h3 className={() => hideWinPercent()}>{winPercent}%</h3>
                    </li>
                    <li>
                        <h3>Losses</h3>
                        <p>{losses}</p>
                    </li>
                </ul> 
            </MatchupRecord>
        </ThemeProvider>
    )
}

export default matchupRecord;
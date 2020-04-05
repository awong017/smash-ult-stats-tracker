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
    }
`

const matchupRecord = () => {
    const { matchupRecord } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecord>
                <h2>Matchup Record Component</h2>
                <MatchupRecordFilter />
                <MatchupRecordGraph />
                <ul>
                    <li>
                        <h3>Wins</h3>
                        <p>{matchupRecord.wins}</p>
                    </li>
                    <li>
                        <h3>Losses</h3>
                        <p>{matchupRecord.losses}</p>
                    </li>
                </ul>
            </MatchupRecord>
        </ThemeProvider>
    )
}

export default matchupRecord;
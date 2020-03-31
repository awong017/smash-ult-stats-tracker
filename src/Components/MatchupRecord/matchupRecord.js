import React from 'react';
import MatchupRecordFilter from '../MatchupRecordFilter/matchupRecordFilter';
import MatchupRecordGraph from '../MatchupRecordGraph/matchupRecordGraph';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecord = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    padding-top: 50px;
`

const matchupRecord = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecord>
                <h2>Matchup Record Component</h2>
                <MatchupRecordFilter />
                <MatchupRecordGraph />
                <p>Matchup Record Data</p>
            </MatchupRecord>
        </ThemeProvider>
    )
}

export default matchupRecord;
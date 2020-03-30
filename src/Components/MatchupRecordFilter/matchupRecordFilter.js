import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecordFilter = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const matchupRecordFilter = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordFilter>
                <p>Matchup Record Filter</p>
            </MatchupRecordFilter>
        </ThemeProvider>
    )
}

export default matchupRecordFilter;
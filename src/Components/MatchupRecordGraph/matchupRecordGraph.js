import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecordGraph = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const matchupRecordGraph = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordGraph>
                <p>Matchup Record Filter</p>
            </MatchupRecordGraph>
        </ThemeProvider>
    )
}

export default matchupRecordGraph;
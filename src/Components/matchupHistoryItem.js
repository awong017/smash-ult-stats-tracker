import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const MatchupHistoryItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-top: 100px;
`

const matchupHistoryItem = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistoryItem>
                <h2>Matchup History Item</h2>
            </MatchupHistoryItem>
        </ThemeProvider>
    )
}

export default matchupHistoryItem;
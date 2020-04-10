import React, { useContext } from 'react';
import MatchupHistoryItem from './matchupHistoryItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const MatchupHistory = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-top: 100px;
`

const matchupHistory = () => {
    const { currentMatchup } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistory>
                <h2>Matchup History</h2>
            </MatchupHistory>
        </ThemeProvider>
    )
}

export default matchupHistory;
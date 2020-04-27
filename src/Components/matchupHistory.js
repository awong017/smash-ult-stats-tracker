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
    const { matches, characters, currentMatchup, filteredMatchup, timeFrame } = useContext(Context)

    // const getMatchupHistory = () => {
    //     if (timeFrame.timeFrame === "all") {
    //         return currentMatchup
    //     }
    //     else {
    //         return filteredMatchup
    //     }
    // }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistory>
                <h2>Matchup History Component</h2>
                    <h2>Matchup History Item Component</h2>
                    {matches.map(match => 
                         <MatchupHistoryItem
                            key={match.id}
                            id={match.id}
                            date={match.date}
                            outcome={match.outcome}
                        />
                    )}
                <button onClick={() => console.log(matches)}>Matches</button>
            </MatchupHistory>
        </ThemeProvider>
    )
}

export default matchupHistory;
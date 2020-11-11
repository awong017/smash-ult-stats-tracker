import React, { useContext } from 'react';
import MatchupHistoryItem from './matchupHistoryItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const MatchupHistory = Styled.div`
    margin-top: 100px;
    color: ${(props) => props.theme.bodyColor};

    .history-heading {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        border: 2px solid white;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0px;
        list-style: none;
        
        li {
            font-weight: bold;
        }
    }
`

const matchupHistory = () => {
    const { currentMatchup, filteredMatchup, timeFrame } = useContext(Context)

    const getMatchupHistory = () => {
        if (timeFrame.timeFrame === "all") {
            return currentMatchup
        }
        else {
            return filteredMatchup
        }
    }

    const sortByDate = getMatchupHistory().sort((a,b) => b.date-a.date) 

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistory>
                <h2>Matchup History</h2>
                <ul className="history-heading">
                    <li className="date-detail">Date</li>
                    <li className="outcome-detail">Outcome</li>
                </ul>
                {sortByDate.map(match => 
                    <MatchupHistoryItem
                        key={match.id}
                        date={match.date}
                        outcome={match.outcome}
                    />
                )}
            </MatchupHistory>
        </ThemeProvider>
    )
}

export default matchupHistory;
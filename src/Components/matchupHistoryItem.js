import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import { format } from 'date-fns';

const MatchupHistoryItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    ul {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0px;
        list-style: none;
        
    }
`

const matchupHistoryItem = ({ date, outcome }) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistoryItem>
                <ul>
                    <li className="date-detail">{format(date, 'M/d/yy')}</li>
                    <li className="outcome-detail">{outcome}</li>
                </ul>
            </MatchupHistoryItem>
        </ThemeProvider>
    )
}

export default matchupHistoryItem;
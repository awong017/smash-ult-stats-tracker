import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const MatchupHistoryItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-top: 100px;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        padding-left: 0px
    }
`

const matchupHistoryItem = ({ id, date, outcome }) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupHistoryItem>
                <ul>
                    <li>{id}</li>
                    <li>{date}</li>
                    <li>{outcome}</li>
                </ul>
            </MatchupHistoryItem>
        </ThemeProvider>
    )
}

export default matchupHistoryItem;
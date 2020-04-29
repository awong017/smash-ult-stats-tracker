import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const TopPlayersItem = Styled.div`
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

const topPlayersItem = ({ user, wins }) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopPlayersItem>
                <ul>
                    <li>{user}</li>
                    <li>{wins}</li>
                </ul>
            </TopPlayersItem>
        </ThemeProvider>
    )
}

export default topPlayersItem;
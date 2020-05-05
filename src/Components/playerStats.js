import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStats = Styled.div`
    margin-left: 24px;
    border: 2px solid black;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};

    h2 {
        margin-left: 24px;
    }
`

const playerStats = () => {
    const { matches } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStats>
                <h2>Player Stats Component</h2>
            </PlayerStats>
        </ThemeProvider>
    )
}

export default playerStats;
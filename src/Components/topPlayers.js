import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopPlayers = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const topPlayers = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopPlayers>
                <h2>Top Players Component</h2>
            </TopPlayers>
        </ThemeProvider>
    )
}

export default topPlayers;
import React, { useContext}  from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const GlobalRankings = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const globalRankings = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <GlobalRankings>
                <h2>Global Rankings Component</h2>
            </GlobalRankings>
        </ThemeProvider>
    )
}

export default globalRankings;
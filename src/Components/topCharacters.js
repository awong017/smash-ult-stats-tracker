import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharacters = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const topCharacters = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopCharacters>
                <h2>Top Characters Component</h2>
            </TopCharacters>
        </ThemeProvider>
    )
}

export default topCharacters;
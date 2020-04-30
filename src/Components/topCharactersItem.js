import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharactersItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const topCharactersItem = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopCharactersItem>
                <h2>Top Characters Item Component</h2>
            </TopCharactersItem>
        </ThemeProvider>
    )
}

export default topCharactersItem;
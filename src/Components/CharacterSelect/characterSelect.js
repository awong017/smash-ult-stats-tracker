import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const CharacterSelect = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-bottom: 150px;
`

const characterSelect = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <CharacterSelect>
                <h2>Character Select Component</h2>
            </CharacterSelect>
        </ThemeProvider>
    )
}

export default characterSelect;
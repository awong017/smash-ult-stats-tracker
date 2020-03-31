import React, { useContext } from 'react';
import CharacterSelectItem from '../CharacterSelectItem/characterSelectItem';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const CharacterSelect = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-bottom: 150px;
    
    .character-select-list {
        display: grid;
        grid-template-columns: repeat(12, 8.33%);
        width: 650px;
        margin-left: auto;
        margin-right: auto;
    }
`

const characterSelect = () => {
    const { characters } = useContext(Context)

    const allCharacters = characters.map(character => {
        return character.name
    })

    return (
        <ThemeProvider theme={GlobalStyles}>
            <CharacterSelect>
                <h2>Character Select Component</h2>
                <div className="character-select-list">
                    {characters.map(character => 
                        <CharacterSelectItem name={character.name}/>
                    )}
                </div>
            </CharacterSelect>
        </ThemeProvider>
    )
}

export default characterSelect;
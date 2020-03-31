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
        width: 850px;
        margin-left: auto;
        margin-right: auto;
    }
`

const characterSelect = () => {
    const { characters } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <CharacterSelect>
                <h2>Character Select Component</h2>
                <div className="character-select-list">
                    {characters.map(character => 
                        <CharacterSelectItem 
                            key={character.id} 
                            name={character.name}
                            image={character.img}
                        />
                    )}
                </div>
            </CharacterSelect>
        </ThemeProvider>
    )
}

export default characterSelect;
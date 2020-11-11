import React, { useContext } from 'react';
import CharacterSelectItem from './characterSelectItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const CharacterSelect = Styled.div`
    margin-bottom: 50px;
    color: ${(props) => props.theme.bodyColor};

    .character-select-list {
        display: grid;
        grid-template-columns: repeat(12, 8.33%);
        width: 850px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 500px) {
        .character-select-list {
            grid-template-columns: repeat(6, 16.66%);
            width: initial;
        }
    }
`

const characterSelect = () => {
    const { characters } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <CharacterSelect>
                <h2>Character Select</h2>
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
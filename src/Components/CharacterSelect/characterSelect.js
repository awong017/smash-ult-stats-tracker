import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';
import Mario from '../../Images/Avatars/mario.jpg';
import Yoshi from '../../Images/Avatars/yoshi.jpg';
import Pikachu from '../../Images/Avatars/pikachu.jpg';
import Peach from '../../Images/Avatars/peach.jpg';
import Bowser from '../../Images/Avatars/bowser.jpg';
import IceClimbers from '../../Images/Avatars/ice-climbers.jpg';
import Fox from '../../Images/Avatars/fox.jpg';
import Ness from '../../Images/Avatars/ness.jpg';

const CharacterSelect = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-bottom: 150px;

    .characters {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        width: 400px;
        margin-left: auto;
        margin-right: auto;
    }

    img {;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
        border: 3px solid white;

        &:hover {
            cursor: pointer;
            border: 3px solid red;
        }
    }
`

const characterSelect = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <CharacterSelect>
                <h2>Character Select Component</h2>
                <div className="characters">
                    <img className="character" src={Mario} />
                    <img className="character" src={Yoshi} />
                    <img className="character" src={Pikachu} />
                    <img className="character" src={Peach} />
                    <img className="character" src={Bowser} />
                    <img className="character" src={IceClimbers} />
                    <img className="character" src={Fox} />
                    <img className="character" src={Ness} />
                </div>
            </CharacterSelect>
        </ThemeProvider>
    )
}

export default characterSelect;
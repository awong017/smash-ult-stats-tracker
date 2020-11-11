import React, { useContext } from 'react';
import Context from '../context';
import Styled from 'styled-components';

const CharacterSelectItem = Styled.div`
    img {
        z-index: -1;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 4px;
        border-radius: 50%;
        width: 65px;
        opacity: 0.5;
    
        &:hover {
            cursor: pointer;
            opacity: 1.0;
        }
    }

    @media screen and (max-width: 500px) {
        img {
            width: 45px;
        }
    }
`;

const characterSelectItem = ({ name, image }) => {
    const { toggleCharacterSelect, getCurrentMatchup, getMatchupRecord } = useContext(Context)

    return (
        <CharacterSelectItem>
            <img 
                src={require(`../Images/Avatars/${image}`)}
                onClick={() => {toggleCharacterSelect(name); getCurrentMatchup(); getMatchupRecord()}}
            />
        </CharacterSelectItem>
    )
}

export default characterSelectItem;

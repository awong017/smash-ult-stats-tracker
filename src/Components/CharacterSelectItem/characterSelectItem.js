import React, { useContext } from 'react';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const CharacterSelectItem = Styled.div`
    img {
        width: 65px;
        opacity: 0.5;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2px;
        border-radius: 50%;
    
        &:hover {
            cursor: pointer;
            opacity: 1.0;
        }
    }
`;

const characterSelectItem = ({ name, image }) => {
    const { toggleCharacterSelect } = useContext(Context)

    return (
        <CharacterSelectItem>
            <img 
                src={require(`../../Images/Avatars/${image}.jpg`)}
                onClick={() => toggleCharacterSelect(name)}
            />
        </CharacterSelectItem>
    )
}

export default characterSelectItem;

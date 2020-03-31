import React, { useContext } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const CharacterSelectItem = Styled.div`
    img {
        opacity: 0.5;
        width: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2px;
    

        &:hover {
            cursor: pointer;
            opacity: 1.0;
        }
    }
`;

const characterSelectItem = ({ name }) => {
    return (
        <CharacterSelectItem>    
            <img src={require(`../../Images/Avatars/${name}.jpg`)} />
        </CharacterSelectItem>
    )
}

export default characterSelectItem;

import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharactersItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    ul {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        padding-left: 0px;
        list-style: none;

        img {
            width: 65px;
            border-radius: 50%;
        }
    }
`

const topCharactersItem = ({ img, wins }) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopCharactersItem>
                <ul>
                    <li><img src={require(`../Images/Avatars/${img}`)}/></li>
                    <li>{wins} wins</li>
                </ul>
            </TopCharactersItem>
        </ThemeProvider>
    )
}

export default topCharactersItem;
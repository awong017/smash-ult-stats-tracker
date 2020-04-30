import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharactersItem = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    ul {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0px;
        list-style: none;
    }
`

const topCharactersItem = ({ name, wins }) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopCharactersItem>
                <ul>
                    <li>{name}</li>
                    <li>{wins}</li>
                </ul>
            </TopCharactersItem>
        </ThemeProvider>
    )
}

export default topCharactersItem;
import React, { useContext } from 'react';
import HomeNav from './homeNav';
import TopPlayers from './topPlayers';
import TopCharacters from './topCharacters';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Home = Styled.div`
    text-align: center;

    h1 {
        margin-top: ${(props) => props.theme.marginTop};
        color: ${(props => props.theme.bodyColor)};
    }
`

const home = () => {
    const context = useContext(Context);

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <HomeNav />
                <h1>Welcome {context.currentUser.username}</h1>
                <TopPlayers />
                <TopCharacters />
                <button onClick={() => console.log(context)}>Context</button>
            </Home>
        </ThemeProvider>
    );
};

export default home;

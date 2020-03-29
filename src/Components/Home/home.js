import React, { useContext } from 'react';
import HomeNav from '../HomeNav/homeNav';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const Home = Styled.div`
    text-align: center;

    h1 {
        margin-top: 200px;
        color: ${(props => props.theme.bodyColor)};
    }
`

const home = () => {
    const context = useContext(Context);

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Home>
                <HomeNav />
                <h1>This is the Home Page</h1>
                <button onClick={() => console.log(context)}>Context</button>
            </Home>
        </ThemeProvider>
    );
};

export default home;

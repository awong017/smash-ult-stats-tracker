import React, { useContext } from 'react';
import StatsNav from '../StatsNav/statsNav';
import Context from '../../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const Stats = Styled.div`
    margin-top: 200px;
    color: ${(props) => props.theme.bodyColor};
    text-align: center;
`

const stats = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Stats>
                <StatsNav />
                <h1>This is the stats page</h1>
            </Stats>
        </ThemeProvider>
    );
};

export default stats;
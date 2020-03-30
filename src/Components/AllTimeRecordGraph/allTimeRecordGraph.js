import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const AllTimeRecordGraph = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    margin-top: 100px;
`

const allTimeRecordGraph = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <AllTimeRecordGraph>
                <h2>All Time Record Graph</h2>
            </AllTimeRecordGraph>
        </ThemeProvider>
    )
}

export default allTimeRecordGraph;
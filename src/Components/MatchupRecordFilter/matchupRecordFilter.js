import React from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecordFilter = Styled.div`
    color: ${(props) => props.theme.bodyColor};

    label {
        margin-right: 10px;
    }

    select {
        background-color: ${(props) => props.theme.formColor};
        border: 2px solid black;
        color: white;

        option {
            text-align: center;
        }
    }
`

const matchupRecordFilter = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordFilter>
                <p>Matchup Record Filter Component</p>
                <label>View By: </label>
                <select>
                  <option defaultValue>--Select Time--</option>
                  <option>Day</option>
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                  <option>All Time</option>
                </select>
            </MatchupRecordFilter>
        </ThemeProvider>
    )
}

export default matchupRecordFilter;
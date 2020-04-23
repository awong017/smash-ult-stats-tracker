import React, { useContext } from 'react';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

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
    const { filterByDate } = useContext(Context);

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordFilter>
                <label>View By: </label>
                <select onChange={(e) => filterByDate(e.target.value)}>
                  <option defaultValue>--Select Time--</option>
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                  <option value="all">All Time</option>
                </select>
            </MatchupRecordFilter>
        </ThemeProvider>
    )
}

export default matchupRecordFilter;
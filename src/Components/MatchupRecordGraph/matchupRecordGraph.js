import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecordGraph = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const matchupRecordGraph = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordGraph>
                <p>Matchup Record Graph Component</p>
                <Doughnut 
                    data={{
                        labels: ["Wins", "Losses"],
                        datasets: [
                            {
                                label: "Matchup Record",
                                data: [2, 1],
                                backgroundColor: [
                                    "rgb(0, 255, 0)",
                                    "rgb(255, 0, 0)",
                                ],
                                borderColor: "#262626"
                            }
                        ]
                    }}
                    height={400}
                    options={{
                        responsive: true,
                        aspectRatio: 1,
                        maintainAspectRatio: false,
                        title: {
                            display: false,
                            text: "Matchup Record Title",
                            fontSize: 14,
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            </MatchupRecordGraph>
        </ThemeProvider>
    )
}

export default matchupRecordGraph;
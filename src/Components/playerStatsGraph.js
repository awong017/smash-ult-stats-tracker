import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStatsGraph = Styled.div`
    border: 2px solid white;
    width: 500px;
    color: ${(props) => props.theme.bodyColor};
    
`

const playerStatsGraph = (props) => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStatsGraph>
                <Doughnut 
                    data={{
                        labels: ["Losses", "Wins"],
                        datasets: [
                            {
                                label: "Player Win Rate",
                                data: [props.losses, props.wins],
                                backgroundColor: [
                                    "#d10000",
                                    "white",
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
                            display: false
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            </PlayerStatsGraph>
        </ThemeProvider>
    )
}

export default playerStatsGraph;
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStatsGraph = Styled.div`
    width: 300px;
    color: ${(props) => props.theme.bodyColor};
    
    @media screen and (max-width: 800px) {
        margin-left: auto;
        margin-right: auto;
    }
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
                    height={300}
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
import React, { useContext } from 'react';
import Context from '../context';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStatsGraph = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const playerStatsGraph = () => {

    const { matchupRecord } = useContext(Context)
    const { wins, losses} = matchupRecord

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStatsGraph>
                <Doughnut 
                    data={{
                        labels: ["Losses", "Wins"],
                        datasets: [
                            {
                                label: "Matchup Record",
                                data: [losses, wins],
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
import React, { useContext } from 'react';
import Context from '../../context';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const MatchupRecordGraph = Styled.div`
    color: ${(props) => props.theme.bodyColor};
`

const matchupRecordGraph = () => {

    const { matchupRecord } = useContext(Context)
    const { wins, losses} = matchupRecord

    return (
        <ThemeProvider theme={GlobalStyles}>
            <MatchupRecordGraph>
                <Doughnut 
                    data={{
                        labels: ["Losses", "Wins"],
                        datasets: [
                            {
                                label: "Matchup Record",
                                data: [losses, wins],
                                backgroundColor: [
                                    "rgb(204, 0, 0)",
                                    "rgb(0, 179, 0)",
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
            </MatchupRecordGraph>
        </ThemeProvider>
    )
}

export default matchupRecordGraph;
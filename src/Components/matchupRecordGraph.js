import React, { useContext } from 'react';
import Context from '../context';
import { Doughnut } from 'react-chartjs-2';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const MatchupRecordGraph = Styled.div`
    height: 500px;
    color: ${(props) => props.theme.bodyColor};

    @media screen and (max-width: 800px) {
        margin-top: 48px;
        height: 150px;
        width: 200px;
    }
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
                                    "#d10000",
                                    "white",
                                ],
                                borderColor: "#262626"
                            }
                        ]
                    }}
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
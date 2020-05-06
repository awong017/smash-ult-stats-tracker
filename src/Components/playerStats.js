import React, { useContext } from 'react';
import Context from '../context';
import { format } from 'date-fns';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStats = Styled.div`
    margin-left: 24px;
    border: 2px solid black;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};

    h2 {
        margin-left: 24px;
    }

    p {
        margin-left: 24px;
    }
`

const playerStats = () => {
    const { currentUser, matches } = useContext(Context)

     // Method for getting last match played

    const getLastMatchPlayed = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user === currentUser.id
        })

        const lastMatchPlayed = filterMatchesByUser.pop()
            return format(lastMatchPlayed.date, 'M/dd/yy')
    }

    // Method for getting player wins for all matches

    const getPlayerWins = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user === currentUser.id
        })

        let wins = 0

        for (let i=0; i<filterMatchesByUser.length; i++) {
            if (filterMatchesByUser[i].outcome === "win") {
                wins++
            }
        }

        console.log(filterMatchesByUser)
        console.log(wins)

        const winPercentage = (wins/(filterMatchesByUser.length))*100
        return winPercentage
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStats>
                <h2>Player Stats Component</h2>
                <p>Last Match Played: {getLastMatchPlayed()}</p>
                <section className="player-stats-content">
                    <p>Win Rate: {getPlayerWins()}%</p>
                </section>
            </PlayerStats>
        </ThemeProvider>
    )
}

export default playerStats;
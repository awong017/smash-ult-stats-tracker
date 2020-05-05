import React, { useContext } from 'react';
import TopPlayersItem from './topPlayersItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopPlayers = Styled.div`
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: 24px;
    width: 300px;
    border: 2px solid black;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};
    text-align: center;
`

const topPlayers = () => {
    const { users, matches } = useContext(Context);

    const bestPlayers = () => {
        const records = []

        for (let i=0; i<users.length; i++) {
            const userMatches = matches.filter(match => {
                return match.user === users[i].id
            })

            let winCount = 0;
            for (let i=0; i<userMatches.length; i++) {
                if (userMatches[i].outcome == "win") {
                    winCount ++
                }
            }

            const userRecord = {
                id: users[i].id,
                user: users[i].username,
                wins: winCount
            }

            records.push(userRecord)
        }

        const sortPlayers = records.sort((a,b) => b.wins - a.wins)
        const topThreePlayers = sortPlayers.splice(0,sortPlayers.length-(sortPlayers.length-3))

        return topThreePlayers
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopPlayers>
                <h2>Top 3 Players</h2>
                {bestPlayers().map(player => 
                    <TopPlayersItem
                        key={player.id}
                        user={player.user}
                        wins={player.wins} 
                    />
                )}
            </TopPlayers>
        </ThemeProvider>
    )
}

export default topPlayers;
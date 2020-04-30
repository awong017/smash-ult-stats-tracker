import React, { useContext } from 'react';
import TopPlayersItem from './topPlayersItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopPlayers = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    border: 2px solid white;

    .top-players-heading {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0px;
        list-style: none;
    }
`

const topPlayers = () => {
    const { users, matches } = useContext(Context);

    const topPlayers = () => {
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
                <h2>Top Players Component</h2>
                <ul className="top-players-heading">
                    <li className="user-detail">User</li>
                    <li className="win-detail"># of Wins</li>
                </ul>
                {topPlayers().map(player => 
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
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

    .most-played-character {
        display: flex;
        list-style: none;
        padding-left: 0;

        img {
            display: inline-block;
            margin-left: 24px;
            width: 65px;
            border-radius: 50%;
        }
    }
`

const playerStats = () => {
    const { characters, currentUser, matches } = useContext(Context)

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

        const winPercentage = (wins/(filterMatchesByUser.length))*100
        return winPercentage
    }

    // Method for getting most played character

    const getMostPlayedCharacter = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user === currentUser.id
        })

        let characterMatches = {}

        for (let i=0; i<filterMatchesByUser.length; i++) {
            if (characterMatches[filterMatchesByUser[i].player]) {
                characterMatches[filterMatchesByUser[i].player] = characterMatches[filterMatchesByUser[i].player] + 1
            }
            else {
                characterMatches[filterMatchesByUser[i].player] = 1
            }
        }
        let characterID = Object.entries(characterMatches)
            .sort((a,b) => b[1]-a[1])[0][0]

        let mostPlayedCharacter = characters.find(character => {
            return character.id === parseInt(characterID);
        })
        return mostPlayedCharacter.img
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStats>
                <h2>Player Stats Component</h2>
                <p>Last Match Played: {getLastMatchPlayed()}</p>
                <p>Win Rate: {getPlayerWins()}%</p>
                <ul className="most-played-character">
                    <li>
                        <p>Most Played Character: </p>  
                    </li>
                    <li>
                        <img src={require(`../Images/Avatars/${getMostPlayedCharacter()}`)} 
                            alt="character avatar"
                        /> 
                    </li>
                </ul>
            </PlayerStats>
        </ThemeProvider>
    )
}

export default playerStats;
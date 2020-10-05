import React, { useState, useContext } from 'react';
import Context from '../context';
import { format } from 'date-fns';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStats = Styled.div`
    margin-left: 24px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};

    h2 {
        margin-left: 24px;
    }

    p {
        margin-left: 24px;
    }

    ul {
        display: flex;
        list-style: none;
        padding-left: 0;

        .avatar {
            display: inline-block;
            margin-left: 24px;
            width: 65px;
            border-radius: 50%;
        }
    }
`

const playerStats = () => {
    const { characters, currentUser, matches } = useContext(Context)

    const { playerStats, updatePlayerStats } = useState({
        mostPlayedCount: "",
        mostWinCount: "",
        mostLossCount: ""
    })

     // Method for getting last match played

    const getLastMatchPlayed = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user_id === currentUser.id
        })

        if (filterMatchesByUser.length > 0) {
            const lastMatchPlayed = filterMatchesByUser.pop()
            return format(lastMatchPlayed.date, 'M/dd/yy')
        }
        else {
            return "N/A"
        }
    }

    // Method for getting player wins for all matches

    const getPlayerWins = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user_id === currentUser.id
        })

        if (filterMatchesByUser.length > 0) {
            let wins = 0

            for (let i=0; i<filterMatchesByUser.length; i++) {
                if (filterMatchesByUser[i].outcome === "win") {
                    wins++
                }
            }
    
            const winPercentage = (wins/(filterMatchesByUser.length))*100
            return winPercentage.toFixed(1)
        }
        else {
            return "N/A"
        }
    }

    // Method for getting most played character

    const getMostPlayedCharacter = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user_id === currentUser.id
        })

        if (filterMatchesByUser.length > 0) {
            let characterMatches = {}

            for (let i=0; i<filterMatchesByUser.length; i++) {
                if (characterMatches[filterMatchesByUser[i].player]) {
                    characterMatches[filterMatchesByUser[i].player] = characterMatches[filterMatchesByUser[i].player] + 1
                }
                else {
                    characterMatches[filterMatchesByUser[i].player] = 1
                }
            }
            let mostPlayedCharacter = Object.entries(characterMatches)
                .sort((a,b) => b[1]-a[1])[0]
            
    
            let mostPlayedCharacterData = characters.find(character => {
                return character.id === parseInt(mostPlayedCharacter[0]);
            })
            return mostPlayedCharacterData.img
        }
        else {
            return "na.jpg"
        }
    }

    // Method for getting character with most wins

    const getCharacterWithMostWins = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user_id === currentUser.id
        })

        const filterMatchesByWins = filterMatchesByUser.filter(match => {
            return match.outcome === "win"
        })

        if (filterMatchesByWins.length > 0) {
            let winCounts = {}
    
            for (let i=0; i<filterMatchesByWins.length; i++) {
                if (winCounts[filterMatchesByWins[i].player]) {
                    winCounts[filterMatchesByWins[i].player] = winCounts[filterMatchesByWins[i].player] + 1
                }
                else {
                    winCounts[filterMatchesByWins[i].player] = 1
                }
            }
            
            const sortedWinCounts = Object.entries(winCounts).sort((a,b) => b[1] - a[1])

            const character = characters.find(character => {
                return character.id == sortedWinCounts[0][0]
            })

            return character.img
        }
        else {
            return "na.jpg"
        }
    }

    // Method for getting character with most losses

    const getCharacterWithMostLosses = () => {
        const filterMatchesByUser = matches.filter(match => {
            return match.user_id === currentUser.id
        })

        const filterMatchesByLosses = filterMatchesByUser.filter(match => {
            return match.outcome === "loss"
        })

        if (filterMatchesByLosses.length > 0) {
            let lossCounts = {}
    
            for (let i=0; i<filterMatchesByLosses.length; i++) {
                if (lossCounts[filterMatchesByLosses[i].player]) {
                    lossCounts[filterMatchesByLosses[i].player] = lossCounts[filterMatchesByLosses[i].player] + 1
                }
                else {
                    lossCounts[filterMatchesByLosses[i].player] = 1
                }
            }
            
            const sortedLossCounts = Object.entries(lossCounts).sort((a,b) => b[1] - a[1])

            const character = characters.find(character => {
                return character.id == sortedLossCounts[0][0]
            })

            return character.img
        }
        else {
            return "na.jpg"
        }
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStats>
                <h2>Your Stats</h2>
                <p>Last Match Played: {getLastMatchPlayed()}</p>
                <p>Win Rate: {getPlayerWins()}%</p>
                <ul className="most-played-character">
                    <li>
                        <p>Most Played: </p>  
                    </li>
                    <li>
                        <img className="avatar" src={require(`../Images/Avatars/${getMostPlayedCharacter()}`)} 
                            alt="character avatar"
                        /> 
                    </li>
                    <li>
                        <p>INSERT PLAY COUNT HERE</p>
                    </li>
                </ul>
                <ul className="most-wins">
                    <li>
                        <p>Most Wins: </p>  
                    </li>
                    <li>
                        <img className="avatar" src={require(`../Images/Avatars/${getCharacterWithMostWins()}`)} 
                            alt="character avatar"
                        /> 
                    </li>
                    <li>
                        <p>INSERT WIN COUNT HERE</p>
                    </li>
                </ul>
                <ul className="most-losses">
                    <li>
                        <p>Most Losses: </p>  
                    </li>
                    <li>
                        <img className="avatar" src={require(`../Images/Avatars/${getCharacterWithMostLosses()}`)} 
                            alt="character avatar"
                        /> 
                    </li>
                    <li>
                        <p>INSERT LOSS COUNT HERE</p>
                    </li>
                </ul>
            </PlayerStats>
        </ThemeProvider>
    )
}

export default playerStats;
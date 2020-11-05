import React, { useContext } from 'react';
import PlayerStatsGraph from './playerStatsGraph';
import Context from '../context';
import { format } from 'date-fns';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const PlayerStats = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};

    .most-stats {
        padding-top: 48px;
        padding-right: 48px;
    }

    h2 {
        margin-left: 24px;
    }

    h3 {
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

    // Object for getting player wins for all matches

    const getPlayerWins = {
        filterMatchesByUser: matches.filter(match => {
            return match.user_id === currentUser.id
        }),
        getWinCount: function() {
            let wins = 0

            for (let i=0; i<this.filterMatchesByUser.length; i++) {
                if (this.filterMatchesByUser[i].outcome === "win") {
                    wins++
                }
            }
            return wins
        },
        getLossCount: function() {
            return this.filterMatchesByUser.length - this.getWinCount()
        },
        getWinPercentage: function() {
            if (this.filterMatchesByUser.length > 0) {
                const winPercentage = (this.getWinCount()/(this.filterMatchesByUser.length))*100
                return winPercentage.toFixed(1)
            }
            else {
                return "N/A"
            }
        }
    }

    // Object for getting most played character

    const getMostPlayedCharacter = {
        filterMatchesByUser: matches.filter(match => {
            return match.user_id === currentUser.id
        }),
        getCharacter: function() {
            let characterMatches = {}
    
            for (let i=0; i<this.filterMatchesByUser.length; i++) {
                if (characterMatches[this.filterMatchesByUser[i].player]) {
                    characterMatches[this.filterMatchesByUser[i].player] = characterMatches[this.filterMatchesByUser[i].player] + 1
                }
                else {
                    characterMatches[this.filterMatchesByUser[i].player] = 1
                }
            }
            return Object.entries(characterMatches)
                .sort((a,b) => b[1]-a[1])[0]
        },
        getCharacterAvatar: function() {
            if (this.filterMatchesByUser.length > 0) {
                let characterData = characters.find(character => {
                    return character.id === parseInt(this.getCharacter()[0]);
                })
    
                return characterData.img
            }
            else {
                return "na.jpg"
            }
        },
        getPlayCount: function() {
            if (this.filterMatchesByUser.length > 0) {
                return this.getCharacter()[1]
            }
            else {
                return 0
            }
        }
    }

    // Object for getting character with most wins

    const getCharacterWithMostWins = {
        filterMatchesByUser: matches.filter(match => {
            return match.user_id === currentUser.id
        }),
        getCharacter: function() {
            const filterMatchesByWins = this.filterMatchesByUser.filter(match => {
                return match.outcome === "win"
            })
    
            let winCounts = {}
        
            for (let i=0; i<filterMatchesByWins.length; i++) {
                if (winCounts[filterMatchesByWins[i].player]) {
                    winCounts[filterMatchesByWins[i].player] = winCounts[filterMatchesByWins[i].player] + 1
                }
                else {
                    winCounts[filterMatchesByWins[i].player] = 1
                }
            }
                
            return Object.entries(winCounts)
                .sort((a,b) => b[1] - a[1])[0]
        },
        getCharacterAvatar: function() {
            if (this.filterMatchesByUser.length > 0) {
                const characterData = characters.find(character => {
                    return character.id == this.getCharacter()[0]
                })

                return characterData.img
            }
            else {
                return "na.jpg"
            }
        },
        getWinCount: function() {
            if (this.filterMatchesByUser.length > 0) {
                return this.getCharacter()[1]
            }
            else {
                return 0
            }
        }
    }

    // Object for getting character with most losses

    const getCharacterWithMostLosses = {
        filterMatchesByUser: matches.filter(match => {
            return match.user_id === currentUser.id
        }),
        getCharacter: function() {
            const filterMatchesByLosses = this.filterMatchesByUser.filter(match => {
                return match.outcome === "loss"
            })
    
            let lossCounts = {}
        
            for (let i=0; i<filterMatchesByLosses.length; i++) {
                if (lossCounts[filterMatchesByLosses[i].player]) {
                    lossCounts[filterMatchesByLosses[i].player] = lossCounts[filterMatchesByLosses[i].player] + 1
                }
                else {
                    lossCounts[filterMatchesByLosses[i].player] = 1
                }
            }
                
            return Object.entries(lossCounts)
                .sort((a,b) => b[1] - a[1])[0]
        },
        getCharacterAvatar: function() {
            if (this.filterMatchesByUser.length > 0) {
                const characterData = characters.find(character => {
                    return character.id == this.getCharacter()[0]
                })

                return characterData.img
            }
            else {
                return "na.jpg"
            }
        },
        getlossCount: function() {
            if (this.filterMatchesByUser.length > 0) {
                return this.getCharacter()[1]
            }
            else {
                return 0
            }
        }
    }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <PlayerStats>
                <section className="intro-stats">
                    <h2>Your Stats</h2>
                    <p>Last Match Played: {getLastMatchPlayed()}</p>
                    <p>Win Rate: {getPlayerWins.getWinPercentage()}%</p>
                    <PlayerStatsGraph 
                        wins={getPlayerWins.getWinCount()} 
                        losses={getPlayerWins.getLossCount()}
                    />
                </section>
                <section className="most-stats">
                    <h3>Most Played</h3>
                    <ul className="most-played-character">
                        <li>
                            <img className="avatar" src={require(`../Images/Avatars/${getMostPlayedCharacter.getCharacterAvatar()}`)} 
                                alt="character avatar"
                            /> 
                        </li>
                        <li>
                            <p>{getMostPlayedCharacter.getPlayCount()} plays</p>
                        </li>
                    </ul>
                    <h3>Most Wins</h3>
                    <ul className="most-wins">
                        <li>
                            <img className="avatar" src={require(`../Images/Avatars/${getCharacterWithMostWins.getCharacterAvatar()}`)} 
                                alt="character avatar"
                            /> 
                        </li>
                        <li>
                            <p>{getCharacterWithMostWins.getWinCount()} wins</p>
                        </li>
                    </ul>
                    <h3>Most Losses</h3>
                    <ul className="most-losses">
                        <li>
                            <img className="avatar" src={require(`../Images/Avatars/${getCharacterWithMostLosses.getCharacterAvatar()}`)} 
                                alt="character avatar"
                            /> 
                        </li>
                        <li>
                            <p>{getCharacterWithMostLosses.getlossCount()} losses</p>
                        </li>
                    </ul>
                </section>
            </PlayerStats>
        </ThemeProvider>
    )
}

export default playerStats;
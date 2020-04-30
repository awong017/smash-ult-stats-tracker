import React, { useContext } from 'react';
import TopCharactersItem from './topCharactersItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharacters = Styled.div`
    color: ${(props) => props.theme.bodyColor};
    border: 2px solid white;

    .top-characters-heading {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0px;
        list-style: none;
    }
`

const topCharacters = () => {
        const { characters, matches } = useContext(Context);
    
        const bestCharacters = () => {
            const records = []
    
            for (let i=0; i<characters.length; i++) {
                const characterMatches = matches.filter(match => {
                    return match.player === characters[i].id
                })
    
                let winCount = 0;
                for (let i=0; i<characterMatches.length; i++) {
                    if (characterMatches[i].outcome == "win") {
                        winCount ++
                    }
                }
    
                const characterRecord = {
                    id: characters[i].id,
                    name: characters[i].name,
                    wins: winCount
                }
    
                records.push(characterRecord)
            }
    
            const sortCharacters = records.sort((a,b) => b.wins - a.wins)
            const topThreeCharacters = sortCharacters.splice(0,sortCharacters.length-(sortCharacters.length-3))
    
            return topThreeCharacters
        }

    return (
        <ThemeProvider theme={GlobalStyles}>
            <TopCharacters>
                <h2>Top Characters Component</h2>
                <ul className="top-characters-heading">
                    <li>Character</li>
                    <li># of Wins</li>
                </ul>
                {bestCharacters().map(match =>
                     <TopCharactersItem 
                        key={match.id}
                        name={match.name}
                        wins={match.wins}
                    />
                )}
               
            </TopCharacters>
        </ThemeProvider>
    )
}

export default topCharacters;
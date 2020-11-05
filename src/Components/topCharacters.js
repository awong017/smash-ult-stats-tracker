import React, { useContext } from 'react';
import TopCharactersItem from './topCharactersItem';
import Context from '../context';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';


const TopCharacters = Styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 300px;
    background-color: ${(props) => props.theme.formColor};
    color: ${(props) => props.theme.bodyColor};
    text-align: center;

    @media screen and (max-width: 500px) {
        margin-left: auto;
        margin-right: auto;
    }
`

const topCharacters = () => {
    const { characters, updateCharacters, matches } = useContext(Context);
    
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
                img: characters[i].img,
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
                <h2>Top 3 Characters</h2>
                {bestCharacters().map(character =>
                     <TopCharactersItem 
                        key={character.id}
                        name={character.name}
                        img={character.img}
                        wins={character.wins}
                    />
                )}
               
            </TopCharacters>
        </ThemeProvider>
    )
}

export default topCharacters;
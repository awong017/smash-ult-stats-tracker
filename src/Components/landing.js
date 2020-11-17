import React, { useState, useContext, useEffect } from 'react';
import Context from '../context';
import Config from '../config';
import LandingNav from './landingNav';
import LandingList from './landingList';
import TopPlayers from './topPlayers';
import TopCharacters from './topCharacters';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Landing = Styled.div`
    .landing-content {
        display: flex;
        justify-content: space-between;
        margin-top: ${(props) => props.theme.marginTop};
        padding-left: 24px;
        padding-right: 24px;
        color: white;
    }

    .rankings {
        width: 300px;
    }

    .error {
        color: red;
    }

    @media screen and (max-width: 800px) {
        .landing-content {
            flex-direction: column-reverse;
            margin-top: 200px;
            padding-left: 12px;
            padding-right: 12px; 
        }

        .rankings {
            width: initial;
        }
    }
`;

const landing = () => {
    const { updateUsers, updateMatches, updateCharacters } = useContext(Context)

    const [error, updateError] = useState('')

    useEffect(() => {
        let isSubscribed = true;
        fetch(`${Config.API_ENDPOINT}/api/users`)
            .then(res => (isSubscribed ? res.json().then(resJson => updateUsers(resJson)) : null))
            .catch(error => (isSubscribed ? updateError(error.toString()) : null))
        return () => isSubscribed = false 
    }, []) 

    useEffect(() => {
        let isSubscribed = true;
        fetch(`${Config.API_ENDPOINT}/api/matches`)
            .then(res => (isSubscribed ? res.json() 
            .then(resJson => {
                const modifiedMatches = resJson.map(match => ({
                    id: match.id,
                    date: parseInt(match.date),
                    user_id: match.user_id,
                    player: match.player,
                    opponent: match.opponent,
                    outcome: match.outcome
                    })
                )
                updateMatches(modifiedMatches)
            }) : null))
            .catch(error => (isSubscribed ? updateError(error.toString()) : null))
        return () => isSubscribed = false 
    }, []) 

    useEffect(() => {
        let isSubscribed = true;
        fetch(`${Config.API_ENDPOINT}/api/characters`)
            .then(res => (isSubscribed ? res.json().then(resJson => updateCharacters(resJson)) : null))
            .catch(error => (isSubscribed ? updateError(error.toString()) : null))
        return () => isSubscribed = false 
    }, []) 
       
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Landing>
                <LandingNav />
                <div className="landing-content">
                    <LandingList />
                    <div className="rankings">
                        <TopPlayers />
                        <TopCharacters />
                        <div className="error">{error}</div>
                    </div>
                </div>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
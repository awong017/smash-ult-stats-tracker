import React, { useState, useContext, useEffect } from 'react';
import Context from '../context';
import LandingNav from './landingNav';
import LandingList from './landingList';
import TopPlayers from './topPlayers';
import TopCharacters from './topCharacters';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Landing = Styled.div`
    margin-top: ${(props) => props.theme.marginTop};
    color: white;
    text-align: center;
 
    .landing-content {
        display: flex;
        justify-content: space-between;
    }

    .error {
        color: red;
    }
`;

const landing = () => {
    const { updateCharacters } = useContext(Context)

    const [error, updateError] = useState('')

    useEffect(() => {
        let isSubscribed = true;
        fetch('http://localhost:8000/api/characters')
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
                        <h2>Current Rankings</h2>
                        <TopPlayers />
                        <TopCharacters />
                    </div>
                </div>
                <div className="error">{error}</div>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
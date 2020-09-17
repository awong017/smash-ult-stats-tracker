import React, { useState } from 'react';
import LandingNav from './landingNav';
import LandingItem from './landingItem';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const Landing = Styled.div`
    h1 {
        text-align: center;
        color: ${(props) => props.theme.bodyColor};
        margin-top: ${(props) => props.theme.marginTop};
    }  
`;

const landing = () => {

    const [redditData, updateRedditData] = useState([])

    fetch('https://www.reddit.com/r/supersmashbros/hot.json?g=US&limit=10')
        .then(res => res.json())
        .then(resJson => updateRedditData(resJson.data.children))

    let redditDataCopy = [...redditData]
    redditDataCopy.shift()

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Landing>
                <LandingNav />
                <h1>Landing Page Component</h1>
                {redditDataCopy.map(redditPost => 
                    <LandingItem
                        key={redditPost.data.id} 
                        title={redditPost.data.title}
                        picture={redditPost.data.thumbnail}
                        url={redditPost.data.permalink}
                    />
                )}
                <button onClick={() => console.log(redditData)}>Reddit</button>
            </Landing>
        </ThemeProvider>
    );
};

export default landing;
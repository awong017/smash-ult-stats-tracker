import React, { useState, useEffect } from 'react';
import LandingItem from './landingItem';
import Styled from 'styled-components';

const LandingList = Styled.div`
    width: 50vw;

    h2 {
        text-align: center;
        color: white;
    }

    .landing-items {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
    }

    .error {
        color: red;
    }

    @media screen and (max-width: 1440px) {
        .landing-items {
            grid-template-columns: repeat(2,50%);
        }
    }

    @media screen and (max-width: 500px) {
        margin: auto;
        width: initial;
    }
`

const landingList = () => {
    const [redditData, updateRedditData] = useState([])
    const [error, updateError] = useState('')

    useEffect(() => {
        let isSubscribed = true
        fetch('https://www.reddit.com/r/smashbrosultimate/hot.json?g=US&limit=10')
            .then(res => (isSubscribed ? res.json().then(resJson => updateRedditData(resJson.data.children)) : null))
            .catch(error => (isSubscribed ? updateError(error.toString()) : null))
            return () => isSubscribed = false
    }, [])
   

    return (
        <LandingList>
            <h2>Hot on Reddit</h2>
            <div className="landing-items">
                {redditData.map(redditPost => 
                    <LandingItem
                        key={redditPost.data.id} 
                        title={redditPost.data.title}
                        picture={redditPost.data.thumbnail}
                        url={redditPost.data.permalink}
                    />
                )}
            </div>
            <div className="error">{error}</div>
        </LandingList>
    )
}

export default landingList;
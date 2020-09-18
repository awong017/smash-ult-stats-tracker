import React, { useState } from 'react';
import LandingItem from './landingItem';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const LandingList = Styled.div`
    margin-left: 24px;
    width: 50vw;

    h2 {
        text-align: center;
        color: white;
    }

    .landing-items {
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
    }

    @media screen and (max-width: 960px) {
        .landing-items {
            grid-template-columns: repeat(2,50%);
        }
    }
`

const landingList = () => {
    const [redditData, updateRedditData] = useState([])

    fetch('https://www.reddit.com/r/smashbrosultimate/hot.json?g=US&limit=10')
        .then(res => res.json())
        .then(resJson => updateRedditData(resJson.data.children))

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
            <button onClick={() => console.log(redditData)}>Reddit</button>
        </LandingList>
    )
}

export default landingList;
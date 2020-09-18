import React, { useState } from 'react';
import LandingItem from './landingItem';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const LandingList = Styled.div`
    margin-left: 24px;
    border: 2px solid black;
    width: 50vw;

    h2 {
        text-align: center;
        color: white;
    }

    .landing-items {
        display: grid;
        grid-template-columns: repeat(3, 33%);
    }
`

const landingList = () => {
    const [redditData, updateRedditData] = useState([])

    fetch('https://www.reddit.com/r/supersmashbros/hot.json?g=US&limit=10')
        .then(res => res.json())
        .then(resJson => updateRedditData(resJson.data.children))

    let redditDataCopy = [...redditData]
    redditDataCopy.shift()

    return (
        <LandingList>
            <h2>r/supersmashbros</h2>
            <div className="landing-items">
                {redditDataCopy.map(redditPost => 
                    <LandingItem
                        key={redditPost.data.id} 
                        title={redditPost.data.title}
                        picture={redditPost.data.thumbnail}
                        url={redditPost.data.permalink}
                    />
                )}
            </div>
        </LandingList>
    )
}

export default landingList;
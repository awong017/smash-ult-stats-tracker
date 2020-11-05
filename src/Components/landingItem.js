import React from 'react';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';
import RedditLogo from '../Images/reddit-logo.png';

const LandingItem = Styled.div`
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: ${(props) => props.theme.formColor};
    text-align: center;
    color: white;

    ul {
        list-style: none;
        padding-left: 12px;
        padding-right: 12px;

        .thumbnail {
            width: 200px;
        }

        .reddit-logo {
            width: 200px;
        }

        button {
            margin-top: 24px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 4px 8px;
            background-color: ${(props) => props.theme.accentColor};
            color: white;
            text-align: center;
            font-size: 14px;

            &:hover {
                cursor: pointer;
                background-color: ${(props) => props.theme.hoverColor};
                transition: 0.1s;
            }
        }
    }
    
    @media screen and (max-width: 500px) {
        ul {
            .thumbnail {
                width: 100px;
            }

            .reddit-logo {
                width: 100px;
            }
        }
    }
`

const landingItem = (props) => {
    const pageLink = `https://www.reddit.com/${props.url}`
    
    const imageSource = (thumbnail) => {
        if (!thumbnail.includes("http")) {
            return RedditLogo
        }
        else {
            return thumbnail
        }
    }

    const imageClass = (thumbnail) => {
        if (!thumbnail.includes("http")) {
            return "reddit-logo"
        }
        else {
            return "thumbnail"
        }
    }

    return (
        <LandingItem theme={GlobalStyles}>
           <ul>
               <li><img className={imageClass(props.picture)} src={imageSource(props.picture)}></img></li>
               <li><h3>{props.title}</h3></li>
               <li><button onClick={() => window.open(pageLink)}>See on Reddit</button></li>
           </ul>
        </LandingItem>
    )
}

export default landingItem;
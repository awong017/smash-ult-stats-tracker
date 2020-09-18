import React from 'react';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const LandingItem = Styled.div`
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 2px solid black;
    min-height: 300px;
    background-color: ${(props) => props.theme.formColor};
    text-align: center;
    color: white;

    ul {
        list-style: none;
        padding-left: 0;

        img {
            width: 200px;
        }

        a {
            margin-top: 24px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 4px 8px;
            background-color: ${(props) => props.theme.accentColor};
            text-decoration: none;
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
`

const landingItem = (props) => {
    const pageLink = `https://www.reddit.com/${props.url}`
    return (
        <LandingItem theme={GlobalStyles}>
           <ul>
               <li><img src={props.picture}></img></li>
               <li><h3>{props.title}</h3></li>
               <li><a href={pageLink}>See on Reddit</a></li>
           </ul>
        </LandingItem>
    )
}

export default landingItem;
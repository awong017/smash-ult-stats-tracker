import React from 'react';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const LandingItem = Styled.div`
    text-align: center;
    color: white;

    ul {
        list-style: none;
        padding-left: 0;

        a {
            text-decoration: none;
            color: white;
            text-align: center;
            color: white;
            font-size: 14px;
            padding: 4px 2px;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid black;
            margin-top: 24px;

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
               <li><h2>{props.title}</h2></li>
               <li><a href={pageLink}>Go to Page</a></li>
           </ul>
        </LandingItem>
    )
}

export default landingItem;
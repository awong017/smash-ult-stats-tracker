import React from 'react';
import { Link } from 'react-router-dom';
import SmashBall from './images/smash-ball.jpg';
import SmashBanner from './images/smash-ult-banner.png';
// import './landingNav.css';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/globalStyles';

const Nav = Styled.div`
 position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        ),
        url(${SmashBanner});
    background-size: cover;
    background-color: ${(props) => props.theme.backgroundColor};
    background-position: center center;
    height: 200px;
    width: 100%;
    margin-top: 0px;
    border-bottom: 1px solid ${(props) => props.theme.accentColor};
`;

const NavFlex = Styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 20px;
`;

const Ul = Styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 0;
    padding-right: 10px;
    margin-top: 0px;

    a {
        text-decoration: none;
        color: white;
      }
      
      a:hover {
        cursor: pointer;
        color: red;
      }
`;

const Li = Styled.li`
    list-style: none;
    color: ${(props) => props.theme.linkColor};
    margin - left: 20px;
`;

const SmashBallImage = Styled.img`
    width: 15%;
    border-radius: 50%;
    border: 2px solid white;
    opacity: 0.5;
`;

const landingNav = () => {
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Nav>
                <NavFlex>
                    <Link to={'/'}>
                        <SmashBallImage src={SmashBall} />
                    </Link>
                    <Ul>
                        <Li>
                            <Link to={'/login'}>
                                Login
                            </Link>
                        </Li>
                    </Ul>
                </NavFlex>
            </Nav>
        </ThemeProvider>
    );
};

export default landingNav;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
import SmashBall from '../Images/smash-ball.jpg';
import SmashBanner from '../Images/smash-ult-banner.png';
import Styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

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

    .nav-flex {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-left: 20px;
    }
  
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-left: 0;
        padding-right: 8px;
        margin-top: 0px;
    }
   
    li {
        list-style: none;
        color: ${(props) => props.theme.linkColor};
        margin-left: 20px;
    }

    a {
        text-decoration: none;
        color: white;
      }
      
      a:hover {
        cursor: pointer;
        color: ${(props) => props.theme.hoverColor};
      }

    .smash-ball-image {
        width: 150px;
        border-radius: 50%;
        border: 2px solid white;
        opacity: 0.5;

        &:hover {
            opacity: 1.0;
            transition: 0.3s;
        }
    }

    @media screen and (max-width: 800px) {
        height: 150px;

        .smash-ball-image {
            width: 75px;
        }
    }
`;

const landingNav = () => {
    const { clearErrors } = useContext(Context)

    return (
        <ThemeProvider theme={GlobalStyles}>
            <Nav>
                <div className="nav-flex">
                    <Link to={'/'}>
                        <img className="smash-ball-image" src={SmashBall} />
                    </Link>
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to={'/login'} onClick={() => clearErrors()}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </Nav>
        </ThemeProvider>
    );
};

export default landingNav;
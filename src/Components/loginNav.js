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

        .smash-ball-image {
            width: 150px;
            border-radius: 50%;
            border: 2px solid white;
            margin-top: 20px;
            margin-left: 20px;
            opacity: 0.5;

            &:hover {
                opacity: 1.0;
                transition: 0.3s;
            }
        }
    }
`;

const loginNav = () => {
    const { clearErrors } = useContext(Context)
    
    return (
        <ThemeProvider theme={GlobalStyles}>
            <Nav>
                <Link to={'/'} className="smash-ball" onClick={() => clearErrors()}>
                    <img className="smash-ball-image" src={SmashBall} />
                </Link>
            </Nav>
        </ThemeProvider>
    );
};

export default loginNav;
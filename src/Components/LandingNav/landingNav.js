import React from 'react';
import { Link } from 'react-router-dom';
import SmashBall from './images/smash-ball.jpg';
import './landingNav.css';

const landingNav = () => {
    return (
        <div className="nav">
            <div className="nav-flex">
                <Link to={"/"} className="smash-ball">
                    <img className="smash-ball-image" src={SmashBall} />
                </Link>
                <ul className="landing-nav-ul">
                    <li className="landing-nav-li">
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default landingNav;
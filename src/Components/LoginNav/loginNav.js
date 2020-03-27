import React from 'react';
import { Link } from 'react-router-dom';
import SmashBall from '../LandingNav/images/smash-ball.jpg';
import './loginNav.css';

const loginNav = () => {
    return (
        <div className="nav">
            <Link to={'/'} className="smash-ball">
                <img className="smash-ball-image" src={SmashBall} />
            </Link>
        </div>
    );
};

export default loginNav;
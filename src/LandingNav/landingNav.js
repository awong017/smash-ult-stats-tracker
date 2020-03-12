import React from 'react';
import { Link } from 'react-router-dom';
import './landingNav.css';

const landingNav = () => {
    return (
        <div className="nav">
            <ul className="landing-nav-ul">
                <li className="landing-nav-li">
                    <Link to={"/login"}>
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default landingNav;
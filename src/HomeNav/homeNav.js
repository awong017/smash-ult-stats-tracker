import React from 'react';
import { Link } from 'react-router-dom';
import './homeNav.css';

const homeNav = () => {
    return (
        <div className="nav">
            <ul className="home-nav-ul">
                <li className="home-nav-li">
                    <Link to={"/stats"}>
                        Stats
                    </Link>
                </li>
                <li className="home-nav-li">
                    <Link to={"/"}>
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default homeNav;
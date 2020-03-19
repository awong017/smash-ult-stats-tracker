import React from 'react';
import './statsNav.css';
import { Link } from 'react-router-dom';

const statsNav = () => {
    return (
        <div className="nav">
            <ul className="stats-nav-ul">
                <li className="stats-nav-li">
                    <Link to={"/home"}>
                        Home
                    </Link>
                </li>
                <li className="stats-nav-li">
                    <Link to={"/Log Out"}>
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default statsNav;

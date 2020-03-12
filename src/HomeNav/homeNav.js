import React from 'react';
import './homeNav.css';

const homeNav = () => {
    return (
        <div className="nav">
            <ul className="home-nav-ul">
                <li className="home-nav-li">Stats</li>
                <li className="home-nav-li">Log Out</li>
            </ul>
        </div>
    )
}

export default homeNav;
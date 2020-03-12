import React from 'react';
import LandingNav from '../LandingNav/landingNav';
import './landing.css';

const landing = () => {
    return (
        <div className="landing">
            <LandingNav />
            <h1 className="landing-header">This is the landing page</h1>
        </div>
    )
}

export default landing;
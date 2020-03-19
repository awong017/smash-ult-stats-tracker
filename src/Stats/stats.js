import React, { useState } from 'react';
import StatsNav from '../StatsNav/statsNav';
import './stats.css';

const stats = () => {
    return (
        <div className="stats">
            <StatsNav />
            <h1>This is the stats page</h1>
        </div>
    )
}

export default stats;
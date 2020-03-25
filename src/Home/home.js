import React, { useContext, useState } from 'react';
import HomeNav from '../HomeNav/homeNav';
import Context from '../context';
import './home.css';

const home = () => {
    const context = useContext(Context)
    return (
        <div className="home">
            <HomeNav />
            <button onClick={() => console.log(context)}>Context</button>
        </div>
    )
}

export default home;

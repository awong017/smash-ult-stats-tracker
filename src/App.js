import React, { useState } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import './App.css'

const App = () => {

  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </>
    );
  }

  return (
    <div className="app">
      {renderRoutes()}
    </div>
  )  
}

export default withRouter(App);
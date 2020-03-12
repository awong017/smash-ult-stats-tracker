import React, { useState } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Landing from './Landing/landing';
import './App.css'

const App = () => {

  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Landing} />
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
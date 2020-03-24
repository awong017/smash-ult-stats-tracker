import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import Home from './Home/home';
import Stats from './Stats/stats';
import './App.css'

const App = () => {

  const [data, append] = useState(
    {
      users: [
        {
          id: "a1",
          email: "awong017@ucr.edu",
          username: "awong017",
          password: "asdfasdf1"
        }
      ],
      characters: [
        {
          id: 1,
          name: "samus"
        },
        {
          id: 2,
          name: "king dedede"
        },
        {
          id: 3,
          name: "pikachu"
        },
      ],
      matches: "",
      usernameError: "This is a username error",
      passwordError: "This is a password error"
    }
  );

  // Method for handling the login

  const handleLogin = (e) => {
    const { users } = data

    e.preventDefault();
    console.log(users);
  }


  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/login"
          render={(routeProps) => (<Login {...routeProps} data={data} handleLogin={handleLogin} />)}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/stats" component={Stats} />
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
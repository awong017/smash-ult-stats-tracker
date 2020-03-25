import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import Home from './Home/home';
import Stats from './Stats/stats';
import Context from './context';
import './App.css'

const App = (props) => {

  const [users, setUsers] = useState([
    {
      id: "a1",
      email: "awong017@ucr.edu",
      username: "awong017",
      password: "asdfasdf1"
    },
    {
      id: "a2",
      email: "brianphn@gmail.com",
      username: "phanman",
      password: "phantastic"
    },
    {
      id: "a3",
      email: "markt@gmail.com",
      username: "markt",
      password: "masterdev"
    },
  ])

  const [characters, updateCharacters] = useState([
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
  ])

  const [matches, updateMatches] = useState("")

  const [usernameError, updateUsernameError] = useState({
    usernameError: ""
  })

  const [passwordError, updatePasswordError] = useState({
    passwordError: ""
  })

  // Method for handling the login

  const handleLogin = (event, username, password) => {

    event.preventDefault()

    const checkUser = users.some(user => {
      return user.username === username
    })

    const findUser = users.find(user => {
      return user.username === username
    })

    if (!username) {
      updateUsernameError({
        usernameError: "Please provide a username"
      })
    }

    else if (checkUser === false) {
      updateUsernameError({
        usernameError: "User is not found"
      })
    }

    else if (!password) {
      updatePasswordError({
        passwordError: "Please provide a password"
      })
    }

    else if (findUser.password != password) {
      updatePasswordError({
        passwordError: "Incorrect password"
      })
    }

    else {
      updateUsernameError({
        usernameError: ""
      })
      updatePasswordError({
        passwordError: ""
      })
      props.history.push("/home")
    }
  }


  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/stats" component={Stats} />
      </>
    );
  }

  const contextValue = {
    users: users,
    characters: characters,
    matches: matches,
    usernameError: usernameError.usernameError,
    passwordError: passwordError.passwordError,
    handleLogin: handleLogin
  }

  return (
    <Context.Provider value={contextValue}>
      <div className="app">
        {renderRoutes()}
      </div>
    </Context.Provider>
  )
}

export default withRouter(App);
import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login';
import SignUp from './Components/SignUp/signUp';
import ForgotPassword from './Components/ForgotPassword/forgotPassword';
import EmailConfirmation from './Components/EmailConfirmation/emailConfirmation';
import Home from './Components/Home/home';
import Stats from './Components/Stats/stats';
import Context from './context';
import uuid from 'uuid/v4';
import './App.css'

const App = (props) => {

  const [users, updateUsers] = useState([
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

  const [currentUser, updateCurrentUser] = useState('')

  const [characters, updateCharacters] = useState([
    {id: 1,name: "mario"},
    {id: 2,name: "donkey-kong"},
    {id: 3,name: "link"},
    {id: 4,name: "samus"},
    {id: 5,name: "dark-samus"},
    {id: 6,name: "yoshi"},
    {id: 7,name: "kirby"},
    {id: 8,name: "fox"},
    {id: 9,name: "pikachu"},
    {id: 10,name: "luigi"},
    {id: 11,name: "ness"},
    {id: 12,name: "captain-falcon"},
    {id: 13,name: "jigglypuff"},
    {id: 14,name: "peach"},
    {id: 15,name: "daisy"},
    {id: 16,name: "bowser"},
    {id: 17,name: "ice-climbers"},
    {id: 18,name: "sheik"},
    {id: 19,name: "zelda"},
    {id: 20,name: "dr-mario"},
    {id: 21,name: "pichu"},
    {id: 22,name: "falco"},
    {id: 23,name: "marth"},
    {id: 24,name: "lucina"},
    {id: 25,name: "young-link"},
    {id: 26,name: "ganondorf"},
    {id: 27,name: "mewtwo"},
    {id: 28,name: "roy"},
    {id: 29,name: "chrom"},
    {id: 30,name: "mr-game-and-watch"},
    {id: 31,name: "meta-knight"},
    {id: 32,name: "pit"},
    {id: 33,name: "dark-pit"},
    {id: 34,name: "zero-suit-samus"},
    {id: 35,name: "wario"},
    {id: 36,name: "snake"},
    {id: 37,name: "ike"},
    {id: 38,name: "pokemon-trainer"},
    {id: 39,name: "diddy-kong"},
    {id: 40,name: "lucas"},
    {id: 41,name: "sonic"},
    {id: 42,name: "king-dedede"},
    {id: 43,name: "olimar"},
    {id: 44,name: "lucario"},
    {id: 45,name: "rob"},
    {id: 46,name: "toon-link"},
    {id: 47,name: "wolf"},
    {id: 48,name: "villager"},
    {id: 49,name: "mega-man"},
    {id: 50,name: "wii-fit-trainer"},
    {id: 51,name: "rosalina-and-luma"},
    {id: 52,name: "little-mac"},
    {id: 53,name: "greninja"},
    {id: 54,name: "palutena"},
    {id: 55,name: "pac-man"},
    {id: 56,name: "robin"},
    {id: 57,name: "shulk"},
    {id: 58,name: "bowser-jr"},
    {id: 59,name: "duck-hunt"},
    {id: 60,name: "ryu"},
    {id: 61,name: "ken"},

  ])

  const [matches, updateMatches] = useState("")

  const [emailError, updateEmailError] = useState({
    emailError: ""
  })

  const [usernameError, updateUsernameError] = useState({
    usernameError: ""
  })

  const [passwordError, updatePasswordError] = useState({
    passwordError: ""
  })

  // Method for clearing out login and signup errors

  const clearErrors = () => {
    updateEmailError({
      emailError: ""
    })

    updateUsernameError({
      usernameError: ""
    })

    updatePasswordError({
      passwordError: ""
    })
  }

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
      updateUsernameError({
        usernameError: ""
      })
      updatePasswordError({
        passwordError: "Please provide a password"
      })
    }

    else if (findUser.password != password) {
      updateUsernameError({
        usernameError: ""
      })
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

      updateCurrentUser(findUser)

      props.history.push("/home")
    }
  }

  // Method for retrieving forgotten password

  const retrievePassword = (event, email) => {

    event.preventDefault()

    const findEmail = users.some(user => {
      return user.email === email
    })

    if (!email) {
      updateEmailError({
        emailError: "Please enter a valid email address"
      })
    }

    else if (findEmail === false) {
      updateEmailError({
        emailError: "Email address not found"
      })
    }

    else {
      updateEmailError({
        emailError: ""
      })

      const findUser = users.some(user => {
        return user.email === email
      })

      props.history.push('/emailConfirmation')
    }
  }

  // Method for signing up and creating a new account

  const handleSignup = (event, email, username, password1, password2) => {

    event.preventDefault()

    const findUser = users.some(user => {
      return user.username === username
    })

    const findEmail = users.some(user => {
      return user.email === email
    })

    if (!email || !email.includes("@")) {
      updateEmailError({
        emailError: "Please input a valid email address"
      })
    }

    else if (findEmail === true) {
      updateEmailError({
        emailError: "Account already created"
      })
    }

    else if (!username) {
      updateEmailError({ emailError: "" })
      updateUsernameError({
        usernameError: "Please input desired username"
      })
    }

    else if (findUser === true) {
      updateEmailError({ emailError: "" })
      updateUsernameError({
        usernameError: "Username is already taken"
      })
    }

    else if (!password1 || !password2) {
      updateEmailError({ emailError: "" })
      updateUsernameError({ usernameError: "" })
      updatePasswordError({
        passwordError: "Please input desired password"
      })
    }

    else if (password1 !== password2) {
      updateEmailError({ emailError: "" })
      updateUsernameError({ usernameError: "" })
      updatePasswordError({
        passwordError: "Passwords are not matching"
      })
    }

    else {
      updateEmailError({ emailError: "" })
      updateUsernameError({ usernameError: "" })
      updatePasswordError({ passwordError: "" })

      const newUser = {
        id: uuid(),
        email: email,
        username: username,
        password: password1
      }

      updateUsers([...users, newUser])

      updateCurrentUser(newUser)

      props.history.push("/home")
    }
  }

  // Method for logging out

  const handleLogout = () => {
    updateCurrentUser('')
  }

  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/emailConfirmation" component={EmailConfirmation} />
        <Route path="/home" component={Home} />
        <Route path="/stats" component={Stats} />
      </>
    );
  }

  const contextValue = {
    users: users,
    currentUser: currentUser,
    characters: characters,
    matches: matches,
    emailError: emailError.emailError,
    usernameError: usernameError.usernameError,
    passwordError: passwordError.passwordError,
    clearErrors: clearErrors,
    handleLogin: handleLogin,
    retrievePassword: retrievePassword,
    handleSignup: handleSignup,
    handleLogout: handleLogout
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
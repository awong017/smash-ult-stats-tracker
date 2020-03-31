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
    {id:1,name:"Mario",img:"mario"},
    {id:2,name:"Donkey Kong",img:"donkey-kong"},
    {id:3,name:"Link",img:"link"},
    {id:4,name:"Samus",img:"samus"},
    {id:5,name:"Dark Samus",img:"dark-samus"},
    {id:6,name:"Yoshi",img:"yoshi"},
    {id:7,name:"Kirby",img:"kirby"},
    {id:8,name:"Fox",img:"fox"},
    {id:9,name:"Pikachu",img:"pikachu"},
    {id:10,name:"Luigi",img:"luigi"},
    {id:11,name:"Ness",img:"ness"},
    {id:12,name:"Captain Falcon",img:"captain-falcon"},
    {id:13,name:"Jigglypuff",img:"jigglypuff"},
    {id:14,name:"Peach",img:"peach"},
    {id:15,name:"Daisy",img:"daisy"},
    {id:16,name:"Bowser",img:"bowser"},
    {id:17,name:"Ice Climbers",img:"ice-climbers"},
    {id:18,name:"Sheik",img:"sheik"},
    {id:19,name:"Zelda",img:"zelda"},
    {id:20,name:"Dr Mario",img:"dr-mario"},
    {id:21,name:"Pichu",img:"pichu"},
    {id:22,name:"Falco",img:"falco"},
    {id:23,name:"Marth",img:"marth"},
    {id:24,name:"Lucina",img:"lucina"},
    {id:25,name:"Young Link",img:"young-link"},
    {id:26,name:"Ganondorf",img:"ganondorf"},
    {id:27,name:"Mewtwo",img:"mewtwo"},
    {id:28,name:"Roy",img:"roy"},
    {id:29,name:"Chrom",img:"chrom"},
    {id:30,name:"Mr Game & Watch",img:"mr-game-and-watch"},
    {id:31,name:"Meta Knight",img:"meta-knight"},
    {id:32,name:"Pit",img:"pit"},
    {id:33,name:"Dark Pit",img:"dark-pit"},
    {id:34,name:"Zero Suit Samus",img:"zero-suit-samus"},
    {id:35,name:"Wario",img:"wario"},
    {id:36,name:"Snake",img:"snake"},
    {id:37,name:"Ike",img:"ike"},
    {id:38,name:"Pokemon Trainer",img:"pokemon-trainer"},
    {id:39,name:"Diddy Kong",img:"diddy-kong"},
    {id:40,name:"Lucas",img:"lucas"},
    {id:41,name:"Sonic",img:"sonic"},
    {id:42,name:"King Dedede",img:"king-dedede"},
    {id:43,name:"Olimar",img:"olimar"},
    {id:44,name:"Lucario",img:"lucario"},
    {id:45,name:"Rob",img:"rob"},
    {id:46,name:"Toon Link",img:"toon-link"},
    {id:47,name:"Wolf",img:"wolf"},
    {id:48,name:"Villager",img:"villager"},
    {id:49,name:"Mega Man",img:"mega-man"},
    {id:50,name:"Wii Fit Trainer",img:"wii-fit-trainer"},
    {id:51,name:"Rosalina and Luma",img:"rosalina-and-luma"},
    {id:52,name:"Little Mac",img:"little-mac"},
    {id:53,name:"Greninja",img:"greninja"},
    {id:54,name:"Palutena",img:"palutena"},
    {id:55,name:"Pac Man",img:"pac-man"},
    {id:56,name:"Robin",img:"robin"},
    {id:57,name:"Shulk",img:"shulk"},
    {id:58,name:"Bowser Jr",img:"bowser-jr"},
    {id:59,name:"Duck Hunt",img:"duck-hunt"},
    {id:60,name:"Ryu",img:"ryu"},
    {id:61,name:"Ken",img:"ken"},
    {id:62,name:"Cloud",img:"cloud"},
    {id:63,name:"Corrin",img:"corrin"},
    {id:64,name:"Bayonetta",img:"bayonetta"},
    {id:65,name:"Inkling",img:"inkling"},
    {id:66,name:"Ridley",img:"ridley"},
    {id:67,name:"Simon",img:"simon"},
    {id:68,name:"Richter",img:"richter"},
    {id:69,name:"King K Rool",img:"king-k-rool"},
    {id:70,name:"Isabelle",img:"isabelle"},
    {id:71,name:"Incineroar",img:"incineroar"},
    {id:72,name:"Piranha Plant",img:"piranha-plant"},
    {id:73,name:"Joker",img:"joker"},
    {id:74,name:"Mii Brawler",img:"mii-brawler"},
    {id:75,name:"Mii Swordsman",img:"mii-swordsman"},
    {id:76,name:"Mii Gunner",img:"mii-gunner"},
  ])

  const [matches, updateMatches] = useState("")

  const [competitor, udpateCompetitor] = useState({
    competitor: "player"
  })

  const [playerCharacter, updatePlayerCharacter] = useState(
    {
      id:9,
      name:"Pikachu",
      img:"pikachu"
    }
  )

  const [opponentCharacter, updateOpponentCharacter] = useState(
    {
      id:10,
      name:"Luigi",
      img:"luigi"
    }
  )

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

  // Method for toggling competitor

  const toggleCompetitor = () => {
    if (competitor.competitor === "player") {
      udpateCompetitor({
        competitor: "opponent"
      })
    }
    else if (competitor.competitor === "opponent") {
      udpateCompetitor({
        competitor: "player"
      })
    }
  }

  // Method for selecting character

  const toggleCharacterSelect = (name) => {
    const findCharacter = characters.find(character => {
      return character.name === name
    })

    if (competitor.competitor === "player") {
      updatePlayerCharacter(findCharacter);
    }

    else {
      updateOpponentCharacter(findCharacter);
    }
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
    competitor: competitor.competitor,
    playerCharacter: playerCharacter,
    opponentCharacter: opponentCharacter,
    emailError: emailError.emailError,
    usernameError: usernameError.usernameError,
    passwordError: passwordError.passwordError,
    clearErrors: clearErrors,
    handleLogin: handleLogin,
    retrievePassword: retrievePassword,
    handleSignup: handleSignup,
    handleLogout: handleLogout,
    toggleCharacterSelect: toggleCharacterSelect,
    toggleCompetitor: toggleCompetitor,
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
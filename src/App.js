import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './Components/landing';
import Login from './Components/login';
import SignUp from './Components/signUp';
import ForgotPassword from './Components/forgotPassword';
import EmailConfirmation from './Components/emailConfirmation';
import Home from './Components/home';
import Matchup from './Components/matchup';
import Context from './context';
import uuid from 'uuid/v4';

const App = (props) => {

  const [users, updateUsers] = useState([
    {
      id: "u1",
      email: "awong017@ucr.edu",
      username: "awong017",
      password: "awong017"
    },
    {
      id: "u2",
      email: "brianphn@gmail.com",
      username: "phanman",
      password: "phantastic"
    },
    {
      id: "u3",
      email: "markt@gmail.com",
      username: "markt",
      password: "masterdev"
    },
    {
      id: "u4",
      email: "shaann@gmail.com",
      username: "raisin",
      password: "raisin"
    },
    {
      id: "u5",
      email: "alvinv@gmail.com",
      username: "alvinv",
      password: "masterdev2"
    },
  ])

  const [currentUser, updateCurrentUser] = useState({
    id: "u1",
    email: "awong017@ucr.edu",
    username: "awong017",
    password: "asdfasdf1"
  })

  const [characters, updateCharacters] = useState('')

  const [matches, updateMatches] = useState([
    {
      id: "m1",
      date: 1585686353000,
      user: "u1",
      player: 9,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m2",
      date: 1585939615000,
      user: "u1",
      player: 9,
      opponent: 1,
      outcome: "win"
    },
    {
      id: "m3",
      date: 1585939615000,
      user: "u1",
      player: 4,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m4",
      date: 1585686453000,
      user: "u1",
      player: 9,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m5",
      date: 1585939615000,
      user: "u1",
      player: 9,
      opponent: 10,
      outcome: "loss"
    },
    {
      id: "m6",
      date: 1588126662000,
      user: "u3",
      player: 9,
      opponent: 10,
      outcome: "loss"
    },
    {
      id: "m7",
      date: 1588126662000,
      user: "u4",
      player: 9,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m8",
      date: 1588126662000,
      user: "u5",
      player: 13,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m9",
      date: 1588126662000,
      user: "u5",
      player: 12,
      opponent: 10,
      outcome: "win"
    },
    {
      id: "m10",
      date: 1588126662000,
      user: "u2",
      player: 12,
      opponent: 10,
      outcome: "loss"
    },
  ])

  const [currentMatchup, updateCurrentMatchup] = useState([])
  
  const [filteredMatchup, updateFilteredMatchup] = useState([])

  const [matchupRecord, updateMatchupRecord] = useState("")

  const [timeFrame, updateTimeFrame] = useState({
    timeFrame: "all"
  })

  const [competitor, updateCompetitor] = useState({
    competitor: "player"
  })

  const [playerCharacter, updatePlayerCharacter] = useState(
    {
      id: 9,
      name:"Pikachu",
      img:"pikachu.jpg"
    }
  )

  const [opponentCharacter, updateOpponentCharacter] = useState(
    {
      id: 10,
      name:"Luigi",
      img:"luigi.jpg"
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

  // Method for getting matches based on the player character
  // and opponent character

  const getCurrentMatchup = () => {
    const filterByUser = matches.filter(match => {
      return match.user === currentUser.id
    })

    const filterByPlayerCharacter = filterByUser.filter(match => {
      return match.player === playerCharacter.id
    })

    const filterByOpponents = filterByPlayerCharacter.filter(match => {
      return match.opponent === opponentCharacter.id
    })

    updateCurrentMatchup(filterByOpponents)
  }

  // Method for getting the matchup record based on the player
  // charcter and opponent character

  const getMatchupRecord = () => {
    const matches = () => {
      if(timeFrame.timeFrame !== "all") {
        return filteredMatchup
      }
      else {
        return currentMatchup
      }
    }

    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<matches().length; i++) {
      if (matches()[i].outcome === "win") {
        winCount++
      }
      else if (matches()[i].outcome === "loss") {
        lossCount++
      }
    }

    updateMatchupRecord({
      playerCharacter: playerCharacter.id,
      opponentCharacter: opponentCharacter.id,
      wins: winCount,
      losses: lossCount
    })
  }

  // Method for filtering matchup by date

  const filterByDate = (time) => {
    if(time === "day") {
        const matchupByDate = currentMatchup.filter(match => {
          return match.date >= Date.now()-100000000
      })

      updateTimeFrame({timeFrame: "day"})
      updateFilteredMatchup(matchupByDate)
    }

    else if(time === "week") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-700000000
      })

      updateTimeFrame({timeFrame: "week"})
      updateFilteredMatchup(matchupByDate)
    }

    else if(time === "month") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-300000000000
    })

      updateTimeFrame({timeFrame: "month"})
      updateFilteredMatchup(matchupByDate)
    }

    else if(time === "year") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-3650000000000
    })

      updateTimeFrame({timeFrame: "year"})
      updateFilteredMatchup(matchupByDate)
    }

    else {
      updateTimeFrame({timeFrame: "all"})
    }
  }

  // Method for adding wins

  const addWins = () => {
    const match = {
      id: uuid(),
      date: Date.now(),
      user: currentUser.id,
      player: playerCharacter.id,
      opponent: opponentCharacter.id,
      outcome: "win"
    }
  
    updateMatches([...matches, match])
    updateCurrentMatchup([...currentMatchup, match])
  
    if(timeFrame.timeFrame !== "all") {
      updateFilteredMatchup([...filteredMatchup, match])
    }
      
    getMatchupRecord()
  }

  // Method for subtracting wins

  const subtractWins = () => {
    const matchesWon = currentMatchup.filter(match => {
      return match.outcome === "win"
    })

    const lastMatchWon = matchesWon.pop()
    
    const filteredMatches = matches.filter(match => {
      return match !== lastMatchWon
    })

    const filterCurrentMatchup = currentMatchup.filter(match => {
      return match !== lastMatchWon
    })

    if(timeFrame.timeFrame !== "all") {
      const findWonMatch = filteredMatchup.some(match => {
        return match.date === lastMatchWon.date
      })
  
      if (findWonMatch === true) {
        const filter = filteredMatchup.filter(match => {
          return match !== lastMatchWon
        })
  
        updateFilteredMatchup(filter)
      }
    }

    updateMatches(filteredMatches)
    updateCurrentMatchup(filterCurrentMatchup)
    
    getMatchupRecord()
  }

  // Method for adding losses

  const addLosses = () => {
    const match = {
      id: uuid(),
      date: Date.now(),
      user: currentUser.id,
      player: playerCharacter.id,
      opponent: opponentCharacter.id,
      outcome: "loss"
    }

    updateMatches([...matches, match])
    updateCurrentMatchup([...currentMatchup, match])

    if(timeFrame.timeFrame !== "all") {
      updateFilteredMatchup([...filteredMatchup, match])
    }

    getMatchupRecord()
  }

   // Method for subtracting losses

   const subtractLosses = () => {
    const matchesWon = currentMatchup.filter(match => {
      return match.outcome === "loss"
    })

    const lastMatchLost = matchesWon.pop()

    const filteredMatches = matches.filter(match => {
      return match !== lastMatchLost
    })

    const filterCurrentMatchup = currentMatchup.filter(match => {
      return match !== lastMatchLost
    })

    if(timeFrame.timeFrame !== "all") {
      const findLostMatch = filteredMatchup.some(match => {
        return match.date === lastMatchLost.date
      })
  
      if (findLostMatch === true) {
        const filter = filteredMatchup.filter(match => {
          return match !== lastMatchLost
        })
  
        updateFilteredMatchup(filter)
      }
    }
  
    updateMatches(filteredMatches)
    updateCurrentMatchup(filterCurrentMatchup)

    getMatchupRecord()
  }

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
      return user.username.toLowerCase() === username.toLowerCase()
    })

    const findUser = users.find(user => {
      return user.username.toLowerCase() === username.toLowerCase()
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
      return user.email.toLowerCase() === email.toLowerCase()
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
      return user.username.toLowerCase() === username.toLowerCase()
    })

    const findEmail = users.some(user => {
      return user.email.toLowerCase() === email.toLowerCase()
    })

    if (!email || !email.includes("@") || !email.includes(".com")) {
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

    else if (password1.length < 8 || password2.length < 8) {
      updateEmailError({ emailError: "" })
      updateUsernameError({ usernameError: "" })
      updatePasswordError({
        passwordError: "Password must be at least 8 characters long"
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

  // Method for selecting character

  const toggleCharacterSelect = (name) => {
    const findCharacter = characters.find(character => {
      return character.name === name
    })

    if (competitor.competitor === "player") {
      updatePlayerCharacter(findCharacter)
    }

    else {
      updateOpponentCharacter(findCharacter)
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
        <Route path="/matchup" component={Matchup} />
      </>
    );
  }

  const contextValue = {
    users: users,
    currentUser: currentUser,
    characters: characters,
    updateCharacters: updateCharacters,
    matches: matches,
    currentMatchup: currentMatchup,
    filteredMatchup: filteredMatchup,
    matchupRecord: matchupRecord,
    timeFrame: timeFrame,
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
    getCurrentMatchup: getCurrentMatchup,
    getMatchupRecord: getMatchupRecord,
    filterByDate: filterByDate,
    addWins: addWins,
    subtractWins: subtractWins,
    addLosses: addLosses,
    subtractLosses: subtractLosses,
    updateCompetitor: updateCompetitor,
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
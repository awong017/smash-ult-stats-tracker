import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './Components/landing';
import Login from './Components/login';
import SignUp from './Components/signUp';
import ForgotPassword from './Components/forgotPassword';
import EmailConfirmation from './Components/emailConfirmation';
import Home from './Components/home';
import Stats from './Components/stats';
import Context from './context';
import uuid from 'uuid/v4';
import './App.css'

const App = (props) => {

  const [users, updateUsers] = useState([
    {
      id: "u1",
      email: "awong017@ucr.edu",
      username: "awong017",
      password: "asdfasdf1"
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
  ])

  const [currentUser, updateCurrentUser] = useState({
    id: "u1",
    email: "awong017@ucr.edu",
    username: "awong017",
    password: "asdfasdf1"
  })

  const [characters, updateCharacters] = useState([
    {id:1,name:"Mario",img:"mario.jpg"},
    {id:2,name:"Donkey Kong",img:"donkey-kong.jpg"},
    {id:3,name:"Link",img:"link.jpg"},
    {id:4,name:"Samus",img:"samus.jpg"},
    {id:5,name:"Dark Samus",img:"dark-samus.jpg"},
    {id:6,name:"Yoshi",img:"yoshi.jpg"},
    {id:7,name:"Kirby",img:"kirby.jpg"},
    {id:8,name:"Fox",img:"fox.jpg"},
    {id:9,name:"Pikachu",img:"pikachu.jpg"},
    {id:10,name:"Luigi",img:"luigi.jpg"},
    {id:11,name:"Ness",img:"ness.jpg"},
    {id:12,name:"Captain Falcon",img:"captain-falcon.jpg"},
    {id:13,name:"Jigglypuff",img:"jigglypuff.jpg"},
    {id:14,name:"Peach",img:"peach.jpg"},
    {id:15,name:"Daisy",img:"daisy.jpg"},
    {id:16,name:"Bowser",img:"bowser.jpg"},
    {id:17,name:"Ice Climbers",img:"ice-climbers.jpg"},
    {id:18,name:"Sheik",img:"sheik.jpg"},
    {id:19,name:"Zelda",img:"zelda.jpg"},
    {id:20,name:"Dr Mario",img:"dr-mario.jpg"},
    {id:21,name:"Pichu",img:"pichu.jpg"},
    {id:22,name:"Falco",img:"falco.jpg"},
    {id:23,name:"Marth",img:"marth.jpg"},
    {id:24,name:"Lucina",img:"lucina.jpg"},
    {id:25,name:"Young Link",img:"young-link.jpg"},
    {id:26,name:"Ganondorf",img:"ganondorf.jpg"},
    {id:27,name:"Mewtwo",img:"mewtwo.jpg"},
    {id:28,name:"Roy",img:"roy.jpg"},
    {id:29,name:"Chrom",img:"chrom.jpg"},
    {id:30,name:"Mr Game & Watch",img:"mr-game-and-watch.jpg"},
    {id:31,name:"Meta Knight",img:"meta-knight.jpg"},
    {id:32,name:"Pit",img:"pit.jpg"},
    {id:33,name:"Dark Pit",img:"dark-pit.jpg"},
    {id:34,name:"Zero Suit Samus",img:"zero-suit-samus.jpg"},
    {id:35,name:"Wario",img:"wario.jpg"},
    {id:36,name:"Snake",img:"snake.jpg"},
    {id:37,name:"Ike",img:"ike.jpg"},
    {id:38,name:"Pokemon Trainer",img:"pokemon-trainer.jpg"},
    {id:39,name:"Diddy Kong",img:"diddy-kong.jpg"},
    {id:40,name:"Lucas",img:"lucas.jpg"},
    {id:41,name:"Sonic",img:"sonic.jpg"},
    {id:42,name:"King Dedede",img:"king-dedede.jpg"},
    {id:43,name:"Olimar",img:"olimar.jpg"},
    {id:44,name:"Lucario",img:"lucario.jpg"},
    {id:45,name:"Rob",img:"rob.jpg"},
    {id:46,name:"Toon Link",img:"toon-link.jpg"},
    {id:47,name:"Wolf",img:"wolf.jpg"},
    {id:48,name:"Villager",img:"villager.jpg"},
    {id:49,name:"Mega Man",img:"mega-man.jpg"},
    {id:50,name:"Wii Fit Trainer",img:"wii-fit-trainer.jpg"},
    {id:51,name:"Rosalina & Luma",img:"rosalina-and-luma.jpg"},
    {id:52,name:"Little Mac",img:"little-mac.jpg"},
    {id:53,name:"Greninja",img:"greninja.jpg"},
    {id:54,name:"Palutena",img:"palutena.jpg"},
    {id:55,name:"Pac Man",img:"pac-man.jpg"},
    {id:56,name:"Robin",img:"robin.jpg"},
    {id:57,name:"Shulk",img:"shulk.jpg"},
    {id:58,name:"Bowser Jr",img:"bowser-jr.jpg"},
    {id:59,name:"Duck Hunt",img:"duck-hunt.jpg"},
    {id:60,name:"Ryu",img:"ryu.jpg"},
    {id:61,name:"Ken",img:"ken.jpg"},
    {id:62,name:"Cloud",img:"cloud.jpg"},
    {id:63,name:"Corrin",img:"corrin.jpg"},
    {id:64,name:"Bayonetta",img:"bayonetta.jpg"},
    {id:65,name:"Inkling",img:"inkling.jpg"},
    {id:66,name:"Ridley",img:"ridley.jpg"},
    {id:67,name:"Simon",img:"simon.jpg"},
    {id:68,name:"Richter",img:"richter.jpg"},
    {id:69,name:"King K Rool",img:"king-k-rool.jpg"},
    {id:70,name:"Isabelle",img:"isabelle.jpg"},
    {id:71,name:"Incineroar",img:"incineroar.jpg"},
    {id:72,name:"Piranha Plant",img:"piranha-plant.jpg"},
    {id:73,name:"Joker",img:"joker.jpg"},
    {id:74,name:"Hero",img:"hero.jpg"},
    {id:75,name:"Banjo & Kazooie",img:"banjo-and-kazooie.jpg"},
    {id:76,name:"Terry",img:"terry.jpg"},
    {id:77,name:"Byleth",img:"byleth.jpg"},
    {id:78,name:"Mii Brawler",img:"mii-brawler.jpg"},
    {id:79,name:"Mii Swordsman",img:"mii-swordsman.jpg"},
    {id:80,name:"Mii Gunner",img:"mii-gunner.jpg"},
  ])

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
      date: 1585939615000,
      user: "u1",
      player: 9,
      opponent: 10,
      outcome: "loss"
    },
    {
      id: "m5",
      date: 1585686453000,
      user: "u1",
      player: 9,
      opponent: 10,
      outcome: "win"
    },
  ])

  const [currentMatchup, updateCurrentMatchup] = useState("")
  
  const [filteredMatchup, updateFilteredMatchup] = useState([])

  const [matchupRecord, updateMatchupRecord] = useState("")

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
    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<filteredMatchup.length; i++) {
      if (filteredMatchup[i].outcome === "win") {
        winCount++
      }
      else if (filteredMatchup[i].outcome === "loss") {
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

  const filterByDate = (timeFrame) => {
    if(timeFrame === "day") {
        const matchupByDate = currentMatchup.filter(match => {
          return match.date >= Date.now()-100000000
      })
        
      updateFilteredMatchup(matchupByDate)
    }

    else if(timeFrame === "week") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-700000000
      })

      updateFilteredMatchup(matchupByDate)
    }

    else if(timeFrame === "month") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-300000000000
    })

    updateFilteredMatchup(matchupByDate)
    }

    else if(timeFrame === "year") {
      const matchupByDate = currentMatchup.filter(match => {
        return match.date >= Date.now()-3650000000000
    })

    updateFilteredMatchup(matchupByDate)
    }

    else {
      updateFilteredMatchup(currentMatchup)
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
    updateFilteredMatchup([...filteredMatchup, match])

    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<filteredMatchup.length; i++) {
      if (filteredMatchup[i].outcome === "win") {
        winCount++
      }
      else if (filteredMatchup[i].outcome === "loss") {
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

    updateMatches(filteredMatches)
    updateCurrentMatchup(filterCurrentMatchup)

    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<currentMatchup.length; i++) {
      if (currentMatchup[i].outcome === "win") {
        winCount++
      }
      else if (currentMatchup[i].outcome === "loss") {
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

    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<currentMatchup.length; i++) {
      if (currentMatchup[i].outcome === "win") {
        winCount++
      }
      else if (currentMatchup[i].outcome === "loss") {
        lossCount++
      }
    }

    updateMatches([...matches, match])
    updateCurrentMatchup([...currentMatchup, match])
    updateMatchupRecord({
      playerCharacter: playerCharacter.id,
      opponentCharacter: opponentCharacter.id,
      wins: winCount,
      losses: lossCount
    })
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

    updateMatches(filteredMatches)
    updateCurrentMatchup(filterCurrentMatchup)

    let winCount = 0;
    let lossCount = 0;

    for (let i=0; i<currentMatchup.length; i++) {
      if (currentMatchup[i].outcome === "win") {
        winCount++
      }
      else if (currentMatchup[i].outcome === "loss") {
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
        <Route path="/stats" component={Stats} />
      </>
    );
  }

  const contextValue = {
    users: users,
    currentUser: currentUser,
    characters: characters,
    matches: matches,
    currentMatchup: currentMatchup,
    filteredMatchup: filteredMatchup,
    matchupRecord: matchupRecord,
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
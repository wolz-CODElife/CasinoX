import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Games from './Pages/Games'
import Index from './Pages/Index'
import RPSgame from './Pages/RPSgame'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/games" component={Games} />
        <Route path="/game/rps" component={RPSgame} />
      </Switch>
    </Router>
  )
}

export default App

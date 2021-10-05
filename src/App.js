import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Games from './Pages/Games'
import Index from './Pages/Index'
import GamePlay from './Pages/GamePlay'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/games" component={Games} />
        <Route path="/game/:name" component={GamePlay} />
      </Switch>
    </Router>
  )
}

export default App

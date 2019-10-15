import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Login from './components/Login.js'

const App = () => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login}/>
      </Switch>
    </div>
  )
}

export default App
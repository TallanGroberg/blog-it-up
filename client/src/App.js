import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withAuth } from './context/AuthProvider.js'

import Navbar from './components/Navbar.js'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'

const App = props => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  )
}

export default withAuth(App)
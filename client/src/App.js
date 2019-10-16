import React, { useState, useEffect, } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withAuth } from './context/AuthProvider.js'
import axios from 'axios'
import Navbar from './components/Navbar.js'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'
import BlogList from './components/BlogList.js'
import Publish from './components/Publish.js'
import Favorites from './components/Favorites.js'
import ProtectedRoute from './auth/ProtectedRoute'


// change password input to password field 
// push logged in users to home 

const App = props => {



  
  return(
    <div>
     <Route render={ rProps => <Navbar {...rProps} />} />
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/allblogposts' component={BlogList}/>
        <Route path='/publishablogpost' component={Publish}/>
      
        <Route path='/favorites' component={Favorites}/>
      </Switch>
    </div>
  )
}

export default withAuth(App)
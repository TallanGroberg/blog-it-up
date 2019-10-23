import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withAuth, blogPostAxios } from './context/AuthProvider.js'
import ProtectedRoute from './auth/ProtectedRoute'
import Navbar from './components/Navbar.js'
import Profile from './auth/Profile.js'
import SignUp from './components/SignUp.js'
import Login from './components/Login.js'
import BlogList from './components/BlogList.js'
import Publish from './components/Publish.js'
import Favorites from './components/Favorites.js'
import { withCrud } from './context/CrudProvider.js'


const App = props => {
  const { token } = props
  
  return(
    <div>
    
     <Route render={ rProps => <Navbar {...rProps} />} />
      <Switch>
        <Route exact path='/' render={rProps => !token ? <SignUp /> : <Redirect to="/allblogposts"/>}/>
        <Route path='/login' render={rProps =>  !token ? <Login /> : <Redirect to='/allblogposts' />}/>
        <ProtectedRoute path='/allblogposts' component={BlogList}/>
        <ProtectedRoute path='/publishablogpost' component={Publish}/>
        <ProtectedRoute path='/profile' component={Profile} />
      
        <ProtectedRoute path='/favorites' component={Favorites}/>
      </Switch>
    </div>
  )
}

export default withAuth(withCrud(App))

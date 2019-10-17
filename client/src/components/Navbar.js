import React from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider.js'

const Navbar = props => {

    const logout = () => {
        props.history.push('/login')
        props.logout()
    }

    return(
        <div style={{position: 'fixed', border: '1px solid black', padding: 10, bottom: 0, margin: 10}}>
            <>
                Blog it up!
            </>
            <nav>
                <Link to='/allblogposts'>All Blog Posts</Link>
                <Link to='/publishablogpost'>Publish a Blog Post</Link>
                <Link to='/favorites'>Favorites</Link>
                <button  onClick={logout}>{localStorage.getItem('token') !== null ? 'logout' :  'login' } </button>
            </nav>
        </div>
    )
}

export default withAuth(Navbar)
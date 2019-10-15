import React from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider.js'

const Navbar = props => {
    return(
        <div style={{position: 'fixed', border: '1px solid black', padding: 10, bottom: 0, margin: 10}}>
            <>
                Blog it up!
            </>
            <nav>
                <Link to='/allblogposts'>All Blog Posts</Link>
                <Link to='/publishablogpost'>Publish a Blog Post</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/logout'>Logout</Link>
                <button onClick={props.logout}>logout </button>
            </nav>
        </div>
    )
}

export default withAuth(Navbar)
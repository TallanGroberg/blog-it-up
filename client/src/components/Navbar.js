import React from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider.js'

const Navbar = () => {
    return(
        <div style={{position: 'fixed', border: '1px solid black', padding: 10, bottom: 0, margin: 10}}>
            <>
                Blog it up!
            </>
            <nav>
                <Link to='/allBlogPosts'>All Blog Posts</Link>
                <Link to='/publishablogpost'>Publish a Blog Post</Link>
                <Link to='/Favorite'>Favorites</Link>
                <Link to='/logout'>Logout</Link>
            </nav>
        </div>
    )
}

export default withAuth(Navbar)
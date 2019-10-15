import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div style={{border: '1px solid black', padding: 10, bottom: 0, position: 'absolute', margin: 0}}>
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

export default Navbar
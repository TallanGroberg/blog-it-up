import React from 'react'
import { withAuth } from '../context/AuthProvider.js'

const Favorite = props => {
    // Add in a delete button that allows user to remove the blog post from their favorites section
    return(
        <div>
            this each individual favorite blog post
        </div>
    )
}

export default withAuth(Favorites)
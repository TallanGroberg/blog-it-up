import React from 'react'
import { withAuth } from '../context/AuthProvider.js'

const Favorites = props => {
    //you will want to map through each individual favorite. Add in a delete button that allows user to remove the blog post from their f
    return(
        <div>
            this is the favorites section
        </div>
    )
}

export default withAuth(Favorites)
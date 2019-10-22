import React, { useEffect } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import { withCrud } from '../context/CrudProvider.js'
import Favorite from './Favorite.js'

const Favorites = props => {
    //you will want to map through each individual favorite. Add in a delete button that allows user to remove the blog post from their f
    console.log(props)

    const currentUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        props.getFavoriteBlogPosts(currentUser._id)
    }, [])

    return(
        <div>
        </div>
    )
}

export default withAuth(withCrud(Favorites))
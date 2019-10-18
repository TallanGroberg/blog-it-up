import React from 'react'
import { withAuth } from '../context/AuthProvider.js'
import { withCrud } from '../context/CrudProvider.js'
import Favorite from './Favorite.js'

const Favorites = props => {
    //you will want to map through each individual favorite. Add in a delete button that allows user to remove the blog post from their f

    const mappedFavorites = props.favoriteBlogPosts.map(favoritePost=> {
        return <Favorite key={favoritePost._id} {...favoritePost} />}) 
    


    return(
        <div>
            {mappedFavorites}
        </div>
    )
}

export default withAuth(withCrud(Favorites))
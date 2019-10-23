import React, { useEffect } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import { withCrud } from '../context/CrudProvider.js'
import Favorite from './Favorite.js'

const Favorites = props => {

    const currentUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        props.getFavoriteBlogPosts(currentUser._id)
    }, [])

    let mappedFavorites 
    if(props.favoriteBlogPosts[0]){
        mappedFavorites = props.favoriteBlogPosts.map((favorite, i) => 
                                                        <div key={i}>
                                                            <h1 >{favorite.title}</h1>
                                                            <p>Author: {favorite.author}</p>
                                                            <p>Published date: {favorite.date}</p>
                                                            <img src={favorite.image} alt={favorite.title} style={{width: 200}}/>
                                                            <p className='description'>Description: {favorite.description}</p>
                                                            <p>Category: {favorite.category}</p>
                                                            {/* <button>Remove</button> */}
                                                        </div>
                                                    ) 
    }

    return(
        <div>
            {mappedFavorites}
        </div>
    )
}

export default withAuth(withCrud(Favorites))
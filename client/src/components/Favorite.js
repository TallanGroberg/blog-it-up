import React from 'react'
import { withAuth } from '../context/AuthProvider.js'

const Favorite = props => {
    // Add in a delete button that allows user to remove the blog post from their favorites section
  
    // localStorage.setItem("favorites")
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Author: {props.author}</p>
            <p>Published date: {props.date}</p>
            <img src={props.image} alt={props.title} style={{width: 200}}/>
            <p className='description'>Description: {props.description}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}

export default withAuth(Favorite)
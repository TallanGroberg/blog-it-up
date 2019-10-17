import React, { useState, useEffect } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import axios from 'axios';

const BlogList = (props) => {


    // console.log('props in blog list', props.blogPosts[0])
    //in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 


    const mappedBlogPosts = props.blogPosts.map(post => 
                                                <div key={post._id} style={{border: '1px solid black', margin: 5, padding: 5}}>
                                                    <h1>{post.title}</h1>
                                                    <p>{post.author}</p>
                                                    <p>{post.date}</p>
                                                    <img src={post.image} alt={post.title} style={{width: 200}}/>
                                                    <p>{post.category} </p>
                                                    <button>Read More</button>
                                                    <button>Delete</button>
                                                    <button>Edit</button>
                                                </div>
                                                )                


    return (
        <div>
            { mappedBlogPosts }
        </div>
    )

}

export default withAuth(BlogList)
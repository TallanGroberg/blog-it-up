import React, { useState, useEffect } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import axios from 'axios';

const BlogList = (props) => {


    console.log('props in blog list', props.blogPosts[0])
    //in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 
    let mappedBlogPosts
    if(props.blogPosts.length > 0){
        mappedBlogPosts = props.blogPosts.map(post => <h1 key={post._id}>{post.title}</h1>)
    }


    return (
        <div>
            { mappedBlogPosts }
        </div>
    )

}

export default withAuth(BlogList)
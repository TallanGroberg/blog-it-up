import React from 'react'
import { withAuth } from '../context/AuthProvider.js'
import Blog from './Blog'

const BlogList = props => {
    
    //in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 
   

    let mappedBlogPosts
    if(props.blogPosts.length > 0){
        mappedBlogPosts = props.blogPosts.map(post => {
        return (<Blog post={post} />)})
    }


    return (
        <div>
            { mappedBlogPosts }
        </div>
    )
}

export default withAuth(BlogList)
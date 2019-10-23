import React, { useEffect } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import Blog from './Blog.js'
import { withCrud } from '../context/CrudProvider.js'

const BlogList = props => {
    const { blogPosts } = props
    //in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 
    useEffect(() => {
        props.getBlogPosts()
    }, [])
    

    return (
        <div>
            {  props.blogPosts.map(post => {
                return <Blog key={post._id} post={post} />})}
        </div>
    )
}

export default withAuth(withCrud(BlogList))
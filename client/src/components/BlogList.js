<<<<<<< HEAD
  
import React from 'react'
=======
import React, {useState, useEffect,} from 'react'
>>>>>>> 7bf9364ac5fa362c9ddadcf19f1be074dba14cd4
import { withAuth } from '../context/AuthProvider.js'
import Blog from './Blog'

const BlogList = props => {
<<<<<<< HEAD
    // console.log('props in blog list', props.blogPosts[0])
=======
    
    const {blogPosts, } = props
>>>>>>> 7bf9364ac5fa362c9ddadcf19f1be074dba14cd4
    //in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 
    useEffect( () => {
        props.getBlogPosts()
    }, [])
    

<<<<<<< HEAD
    let mappedBlogPosts
    if(props.blogPosts.length > 0){
        mappedBlogPosts = props.blogPosts.map(post => {
        return (<Blog post={post} key={post._id} />)})
    }
=======
>>>>>>> 7bf9364ac5fa362c9ddadcf19f1be074dba14cd4

    console.log('blog post in blogList', blogPosts)


    
        

    return (
        <div>
            {  props.blogPosts.map(post => {
        return <Blog post={post} />})}
        </div>
    )
}

export default withAuth(BlogList)
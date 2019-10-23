import React, {useState} from 'react'
import { withAuth, blogPostAxios } from '../context/AuthProvider.js'
import EditBlog from './EditBlog'
import axios from 'axios'
import { withCrud } from '../context/CrudProvider.js'



const Blog = props => {
    const [toggle, setToggle] = useState(true)
    //in this section we have each individual blog post that displays the title, author, published date, image, category. Once a user clicks on the post, it will take us to another page that will allow users to read the full details of the post, edit, delete(if the user created the post, they can delete it. Otherwise they cannot delete the post).

    const toggler = () => {
        setToggle(!toggle )
    }


    const {post} = props
    return (<>
        {toggle ? 
        

            <> 
                <h1>{post.title}</h1>
                <p>Author: {post.author}</p>
                <p>Published date: {post.date}</p>
                <img src={post.image} alt={post.title} style={{width: 200}}/>
                <p className='description'>Description: {post.description}</p>
                <p>Category: {post.category}</p>
                <button>Read more</button>
                <button onClick={() => props.getFavoriteBlogPosts(post._id)}>Favorite</button>
                <button onClick={toggler}>{!toggle ? 'Cancel' : 'Edit'}</button>
                <button onClick={() => props.deleteBlogPost(post._id)}>Delete</button>
            </>
            :
            <>
            <EditBlog toggler={toggler} post={post} />
            <button onClick={toggler}>{!toggle ? 'Cancel' : 'Edit'}</button>
            </>}
          
    

    </>)
}

export default withAuth(withCrud(Blog))
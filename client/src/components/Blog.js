import React, {useState, useEffect} from 'react'
import { withAuth } from '../context/AuthProvider.js'
import EditBlog from './EditBlog'
import { withCrud } from '../context/CrudProvider.js'
import '../style/blog.css'



const Blog = props => {
    
    const [toggle, setToggle] = useState(true)
    //in this section we have each individual blog post that displays the title, author, published date, image, category. Once a user clicks on the post, it will take us to another page that will allow users to read the full details of the post, edit, delete(if the user created the post, they can delete it. Otherwise they cannot delete the post).
    
    const currentUser = JSON.parse(localStorage.getItem('user'))
    
    // useEffect(() => {
    //     props.getFavoriteBlogPosts(currentUser._id)
    // }, [])

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
                <button onClick={() => props.putFavoriteBlogPosts(currentUser._id, post)}>Favorite</button>
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
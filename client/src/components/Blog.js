import React, {useState, useEffect} from 'react'
import { withAuth } from '../context/AuthProvider.js'
import EditBlog from './EditBlog.js'
import CommentForm from './CommentForm.js'
import { withCrud } from '../context/CrudProvider.js'
import '../style/blog.css'



const Blog = props => {
    
    const [toggle, setToggle] = useState(true)
    const [showComment, setshowComment] = useState(false)
    
    const showCommentForm = () => {
        setshowComment(!showComment)
        console.log(showComment)
    }

    const {_id} = props.post

    console.log('_id of post in blog.js', _id)
    
    const currentUser = JSON.parse(localStorage.getItem('user'))
    
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
                <button onClick={showCommentForm}>Add a comment</button>
                {showComment === true ? <CommentForm _id={_id} /> : null }
            </>
            :
            <>
            <EditBlog toggler={toggler} post={post} />
            <button onClick={toggler}>{!toggle ? 'Cancel' : 'Edit'}</button>
            </>}
          
    

    </>)
}

export default withAuth(withCrud(Blog))
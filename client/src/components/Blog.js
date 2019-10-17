import React, {useState} from 'react'
import { withAuth } from '../context/AuthProvider.js'
import EditBlog from './EditBlog'
import axios from 'axios'


const blogPostAxios = axios.create()
blogPostAxios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})



const Blog = props => {
    const [toggle, setToggle] = useState(true)
    //in this section we have each individual blog post that displays the title, author, published date, image, category. Once a user clicks on the post, it will take us to another page that will allow users to read the full details of the post, edit, delete(if the user created the post, they can delete it. Otherwise they cannot delete the post).

    const toggler = () => {
        setToggle(!toggle )
    }

    const deleteBlogPost = (_id) => {
        blogPostAxios.delete(`/api/blog/${_id}`)
    }
    
    const {post} = props
    return (<>
        {toggle ? 
        

            <> 
                <h1 key={post._id}>{post.title}</h1>
                <button onClick={toggler}>{!toggle ? 'hide' : 'edit'}</button>
                <button onClick={() => deleteBlogPost(post._id)}>Delete</button>
            </>
            :
            <>
            <EditBlog toggler={toggler} post={post} />
            <button onClick={toggler}>{!toggle ? 'hide' : 'edit'}</button>
            </>}
          
    

    </>)
}

export default withAuth(Blog)
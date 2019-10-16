import React, { Component } from 'react'
import { withAuth } from '../context/AuthProvider.js'
import axios from 'axios';


//in this section we will map through each blog and give it its own individual component because we want users to click on any blog to read the entire blog post(do not include the description section until the user clicks on the individual blog post) 


class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state={
            blogs: []
        }
        // console.log(props)
    }

    

    // getBlogs = () => {
    //     axios.get('/api/blogs')
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }

    // componentDidMount() {
    //     this.getBlogs()
    // }

    
    render() {
        return (
            <div>

                {/* { this.state.blogs.map(blog => <h1>{blog.title}</h1>)} */}
            </div>
        )
    }

}

export default withAuth(BlogList)
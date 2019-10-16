import React from 'react'
import { withAuth } from '../context/AuthProvider.js'

const Blog = props => {

    //in this section we have each individual blog post that displays the title, author, published date, image, category. Once a user clicks on the post, it will take us to another page that will allow users to read the full details of the post, edit, delete(if the user created the post, they can delete it. Otherwise they cannot delete the post).

    return (
        <div>
            all blog post here
        </div>
    )
}

export default withAuth(BlogList)
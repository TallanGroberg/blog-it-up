import React from 'react'

const BlogList = props => {
    return (
        <div>
            <button onClick={() => props.history.push("/addBlogPost")}>Publish Blog Post</button>
            {/* { props.pets.map(pet => <Pet {...pet} key={pet._id}/>) } */}
        </div>
    )
}

export default BlogList
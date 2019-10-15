import React from 'react'
import { withAuth } from '../context/AuthProvider.js'

const Publish = (props) => {
    return(
        <div style={{border: '1px solid black', padding: 10, textAlign: 'center'}}>
            this is the form section for publishing a blog post
            <br />
            <input placeholder="Title"></input>
            <input placeholder="Author"></input>
            <input placeholder="Date"></input>
            <input placeholder="Image"></input>
            <input placeholder="Description"></input>
            <input placeholder="Category"></input>
            <button>Publish</button>
        </div>
    )
}

export default withAuth(Publish)
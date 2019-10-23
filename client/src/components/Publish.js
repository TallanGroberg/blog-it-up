import React, {useState} from 'react'
import { withAuth, blogPostAxios } from '../context/AuthProvider.js'
import axios from 'axios'



const Publish = (props) => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        blogPostAxios.post('/api/blog', inputs)
        .then(res => {
            setInputs(prevState => ({
                title: '',
                author: '',
                date: '',
                image: '',
                description: '',
                category: ''
            }))
        })
        .catch(err => console.log(err))
        props.history.push('/allblogposts')
    }


    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(inputs =>  ({...inputs, [name]: value, }))
    }

   


    return(
        <div style={{border: '1px solid black', padding: 10, textAlign: 'center'}}>
            this is the form section for publishing a blog post
            <br />
            <form onSubmit={handleSubmit}>
            <input placeholder="Title"
                name='title'
                value={inputs.title}
                onChange={handleChange}
                />
            <input placeholder="Author"
            name='author'
            value={inputs.author}
            onChange={handleChange} />
            <input placeholder="Date"
            name='date'
            value={inputs.date}
            onChange={handleChange} />
            <input placeholder="Image"
            name='image'
            value={inputs.image}
            onChange={handleChange} />
            <input placeholder="Description"
            name='description'
            value={inputs.description}
            onChange={handleChange} />
            <input placeholder="Category"
            name='category'
            value={inputs.category}
            onChange={handleChange}/>
            <button>Publish</button>
            </form>
        </div>
    )
}

export default withAuth(Publish)
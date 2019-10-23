import React, {useState} from 'react'
import { withAuth, blogPostAxios } from '../context/AuthProvider.js'
import moment from 'moment'
import axios from 'axios'
import styled from 'styled-components'


const Publish = (props) => {
    const [inputs, setInputs] = useState({})


    
    const handleSubmit = (e) => {
        e.preventDefault()
        inputs.author = props.user.name
        inputs.date = moment().format('MMMM Do YYYY, h:mm:ss a')
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
        <PublishContainer>
            <PublishTitle>Create a blog post!</PublishTitle>
            <FormSection onSubmit={handleSubmit}>
            <input placeholder="Title"
                name='title'
                value={inputs.title}
                onChange={handleChange}
                />
            
          
            <input placeholder="Image"
            name='image'
            value={inputs.image}
            onChange={handleChange} />
            <textarea height="100" width='150' placeholder="Description"
            name='description'
            value={inputs.description}
            onChange={handleChange} />
            <input placeholder="Category"
            name='category'
            value={inputs.category}
            onChange={handleChange}/>
            <button>Publish</button>
            </FormSection>
        </PublishContainer>
    )
}

export default withAuth(Publish)


const PublishContainer = styled.div`
    color: #A9A9A9;
    text-align: center;
`

const PublishTitle = styled.h1`
    text-transform: uppercase;
`

const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    
`
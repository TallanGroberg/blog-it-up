import React, {useState,} from 'react';
import axios from 'axios'
import {withAuth} from "../context/AuthProvider"

const blogPostAxios = axios.create()
blogPostAxios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

const EditBlog = (props) => {
  const [edits, setEdits] = useState({})

  const {_id, } = props.post
  console.log('props in edit blog',props)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.toggler()

    props.sendEdits(_id, edits)
  }

  
  const handleChange = (e) => {
    const {name, value} = e.target
    setEdits(edits => ({...edits, [name]: value}))
  }

  
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input placeholder="Title"
                name='title'
                value={edits.title}
                onChange={handleChange}
                />
            <input placeholder="Author"
            name='author'
            value={edits.author}
            onChange={handleChange} />
            <input placeholder="Date"
            name='date'
            value={edits.date}
            onChange={handleChange} />
            <input placeholder="Image"
            name='image'
            value={edits.image}
            onChange={handleChange} />
            <input placeholder="Description"
            name='description'
            value={edits.description}
            onChange={handleChange} />
            <input placeholder="Category"
            name='category'
            value={edits.category}
            onChange={handleChange}/>
            <button>Publish</button>
            </form>
    </div>
  );
};

export default withAuth(EditBlog);
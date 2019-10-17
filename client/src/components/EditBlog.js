import React, {useState,} from 'react';
import axios from 'axios'

const blogPostAxios = axios.create()
blogPostAxios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

const EditBlog = (props) => {
  const [edits, setEdits] = useState({})

  

  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.toggler()

    sendEdits(_id, edits)
  }
const sendEdits = (_id, edits,) => {

  blogPostAxios.put(`/api/blog/${_id}`, edits)
  
  
}
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setEdits(edits => ({...edits, [name]: value}))
  }

  
   const {_id, } = props.post
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

export default EditBlog;
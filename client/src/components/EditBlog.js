import React, {useState,} from 'react';

const EditBlog = (props) => {
  const [edits, setEdits] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/blog${_id}`, edits)
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
            name='catagory'
            value={edits.catagory}
            onChange={handleChange}/>
            <button>Publish</button>
            </form>
    </div>
  );
};

export default EditBlog;
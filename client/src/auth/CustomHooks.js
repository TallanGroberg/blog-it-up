import {useState} from 'react';
import { blogPostAxios, withAuth,} from '../context/AuthProvider'
import axios from 'axios'






blogPostAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const useFormHandler = () => {
  


  const handleEdit = (_id, inputs) => {
    
    blogPostAxios.put(`/auth/${_id}`, inputs).then( res => {
      delete inputs.password
    })
    return inputs
    
}

const handleChange = (e) => {
    const {name, value} = e.target
   
}

return {

        handleChange,
        handleEdit
      }
}

export default useFormHandler;
import {useState} from 'react';
import { blogPostAxios} from '../context/AuthProvider'
import axios from 'axios'






blogPostAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const useFormHandler = () => {
  const [inputs, setInputs] = useState({})


  const handleEdit = (token, inputs) => {
    blogPostAxios.put(`/auth/${token}`, inputs)
}

const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(inputs =>  ({...inputs, [name]: value, }))
}

return {
        inputs,
        handleChange,
        handleEdit
      }
}

export default useFormHandler;
import {useState} from 'react';
import axios from 'axios'



const blogPostAxios = axios.create()


blogPostAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const useFormHandler = () => {
  const [inputs, setInputs] = useState({})
  console.log(inputs)

  const handleSubmit = (_id, inputs) => {

    blogPostAxios.put(`/api/blog${_id}`, inputs)
}

const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(inputs =>  ({...inputs, [name]: value, }))
}

return {
        inputs,
        handleChange,
        handleSubmit
      }
}

export default useFormHandler;
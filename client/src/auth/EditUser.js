import React, {useState} from 'react';
import {withAuth} from '../context/AuthProvider'
import useFormHandler from './CustomHooks'

//make a method to regrex all the whitespace out of a token 

const EditUser = (props) => {
  const [hide, setHide] = useState(true)
  const [inputs, setInputs] = useState({})

  const {toggler, token} = props
  const { handleEdit,} = useFormHandler()

 const cleanToken = (token) => {
  return token.split(' ').join('').split(".").join('').split(",").join('')
 }

 console.log(cleanToken(token))
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    handleEdit(token, inputs)
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(inputs =>  ({...inputs, [name]: value, }))
}

  const passwordHider = () => {
    setHide(hide => (!hide))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input
          placeholder="name"
          name='name'
          value={inputs.name}
          onChange={handleChange}
        />
        <p>email</p>
        <input
          placeholder="email"
          name='email'
          value={inputs.email}
          onChange={handleChange}
        />
        <p>password</p>
        <input
          type={hide ? 'password' : ''}
          placeholder="password"
          name='password'
          value={inputs.password}
          onChange={handleChange}
        />
        <button>Submit</button>

      </form>
        <button onClick={passwordHider}>{hide ? 'show password' : "hide password"}</button>


      <button onClick={toggler}>hide form</button>
    </div>
  );
};

export default withAuth(EditUser);
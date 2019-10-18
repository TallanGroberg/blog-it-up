import React, {useState} from 'react';
import {withAuth} from '../context/AuthProvider'
import useFormHandler from './CustomHooks'

//make a method to regrex all the whitespace out of a token 

const EditUser = (props) => {
  const [hide, setHide] = useState(true)
  const [inputs, setInputs] = useState({})

  const {toggler, _id} = props.user
  const { handleEdit,} = useFormHandler()

 const cleanToken = (token) => {
  // return token.replace(/[^A-Za-z0-9]/).split(' ').join('').split(".").join('').split(",").join('').split('_').join('').split('undefined').join('').split('_').join('').split('.').join('')
  return token.replace(/[^A-Za-z0-9]/)
  
 }

 console.log(_id)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    handleEdit(_id, inputs)
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
        <p>password cannot edit passwords at this time</p>
        {/* <input
          type={hide ? 'password' : ''}
          placeholder="password"
          name='password'
          value={inputs.password}
          onChange={handleChange}
        /> */}
        <button>Submit</button>

      </form>
        <button onClick={passwordHider}>{hide ? 'show password' : "hide password"}</button>


      <button onClick={toggler}>hide form</button>
    </div>
  );
};

export default withAuth(EditUser);
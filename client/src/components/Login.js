import React from 'react'
import { withAuth } from '../context/AuthProvider.js'
import { Link } from 'react-router-dom'

const Login = (props) => {
    const  {name, email, password, handleChange, handleSubmitForLogin } = props



    return(
        <div>
            <div style={{border: '1px solid black', padding: 5, margin: 5, textAlign: 'center'}}>
                <h1>Blog It Up!</h1>
                <form onSubmit={handleSubmitForLogin} style={{display: 'block'}}>
                    <input 
                    placeholder='name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    />
                    
                    <input 
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    />
                    <br />

                    <input 
                    placeholder="Password"
                    type='password'
                    name="password"
                    value={password}
                    onChange={handleChange}
                    />

                    <br />
                    <button>login</button>
                </form>
            </div>
            <div style={{border: '1px solid black', padding: 5, margin: 5, textAlign: 'center'}}>
                <p>Don't have an account?</p>
                <Link to='/'> Sign up</Link>
            </div>
        </div>
    )
}

export default withAuth(Login)
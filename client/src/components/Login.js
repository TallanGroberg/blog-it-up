import React from 'react'
import { withAuth } from '../context/AuthProvider.js'
import { Link } from 'react-router-dom'

const Login = () => {
    return(
        <div>
            <div style={{border: '1px solid black', padding: 5, margin: 5, textAlign: 'center'}}>
                <h1>Blog It Up!</h1>
                <form style={{display: 'block'}}>
                    <input placeholder="Email"></input>
                    <br />
                    <input placeholder="Password"></input>
                    <br />
                    <button>Sign up</button>
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
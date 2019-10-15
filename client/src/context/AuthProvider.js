import React, { Component } from 'react'
import axios from 'axios'
const { Provider, Consumer } = React.createContext()

class AuthProvider extends Component {
    constructor() {
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token:  localStorage.getItem("token") || "",
            name: '',
            email: '',
            password: '',

        }
    } 

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log(this.state)
        this.setState(
        {
            user: {},
            token: ""
        }
    )
}

    login = (user) => {
        axios.post("/user/login", user)
            .then(res => {
                const { token, user } = res.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token,
                });
            })
        }
    
    
    signUp = (user) => {
        axios.post(`user/signup`, user)
        .then(res => {
            const { token, user, } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({
                token,
                user,
            })
            return res
        })
        .catch(err => console.log(err))
        alert(user)
    }

    handleSubmitForLogin = (e) => {
        e.preventDefault(e)
        const user = { 
            token: this.state.token,
            name: this.state.name,
            email: this.state.email, 
            password:  this.state.password
        }
        this.login(user)

        this.setState( prev => ({
            user: {...prev.user, user},
            name: '',
            email: '',
            password: '',
            
        }))
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        const user = { 
            token: this.state.token,
            name: this.state.name,
            email: this.state.email, 
            password:  this.state.password
        }
        this.signUp(user)

        this.setState( prev => ({
            user: {...prev.user, user},
            name: '',
            email: '',
            password: '',
            
        }))
    }
    

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ 
            [name]: value
        })
    }
    
    render() {
        console.log(this.state.user)
        return ( 
            <div>
                <Provider  
                    value={{
                        user: this.state.user,
                        token: this.state.token,
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        handleChange: this.handleChange,
                        handleSubmit: this.handleSubmit,
                        signUp: this.signUp,
                        handleSubmitForLogin: this.handleSubmitForLogin,
                        logout: this.logout,
                    }}> 
                { this.props.children  }
                </Provider>
            </div>
        )
    }
}

export const withAuth = C => props => (
    <Consumer>
        { value => <C { ...value } { ...props  }/>}
    </Consumer>
)

export default AuthProvider
import React, { Component } from 'react'
import axios from 'axios'
const blogPostAxios = axios.create()


blogPostAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

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

            blogPosts: []

        }
    } 

    componentDidMount() {
        blogPostAxios.get('/api/blog/')
        .then( res => { 
            this.setState(prev => ({
            blogPosts: [...prev.blogPosts, ...res.data]
        })) 
        })
        .catch(err => console.log(err)) }
        
        
        // start of auth features ==========================>
    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState(
        {user: {},
        token: ""})}
    
    login = (user) => {
        axios.post("/user/login", user).then(res => {
            const { token, user } = res.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({ user,token,});  })}
    
    
    signUp = (user) => {
        axios.post(`user/signup`, user).then(res => {
            const { token, user, } = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            this.setState({token,user,})
            return res}).catch(err => console.log(err)) }
    
    handleSubmitForLogin = (e) => {
        e.preventDefault(e)
        const user = { 
            token: this.state.token,
            name: this.state.name,
            email: this.state.email, 
            password:  this.state.password}
                this.login(user)
        this.setState( prev => ({
            user: {...prev.user, user},
            name: '',
            email: '',
            password: '',
            
        })) }
    
    
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
            
        }))  }
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value}) }
    //end of auth features ==========================



    render() {
        return ( 
            <div>
                <Provider  
                    value={{
                        blogPosts: this.state.blogPosts,
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
                        RouterProps: this.props,
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
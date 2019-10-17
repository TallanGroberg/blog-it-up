import React, { Component } from 'react'
import axios from 'axios'
import { withAuth, blogPostAxios } from './AuthProvider.js'

const { Provider, Consumer } = React.createContext()

class CrudProvider extends Component {
    constructor() {
        super()
        this.state = {
            blogPosts: []
        }
    }

    getBlogPosts = () => {
        blogPostAxios.get('/api/blog/')
        .then( res => { 
            this.setState(prev => ({
                blogPosts: [...res.data]
            })) 
        })
        .catch(err => console.log(err)) 
        
    }

    deleteBlogPost = (_id) => {
        blogPostAxios.delete(`/api/blog/${_id}`)
    }

    sendEdits = (_id, edits) => {
        blogPostAxios.put(`/api/blog/${_id}`, edits)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <Provider 
                    value={{
                        blogPosts: this.state.blogPosts,
                        getBlogPosts: this.getBlogPosts,
                        deleteBlogPost: this.deleteBlogPost,
                        sendEdits: this.sendEdits
                    }}>

                { this.props.children  }
                </Provider>
            </div>
        )
    }
}

export const withCrud = C => props => (
    <Consumer>
        { value => <C { ...value } { ...props  }/>}
    </Consumer>
)

export default withAuth(CrudProvider)
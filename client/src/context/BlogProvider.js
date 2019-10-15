import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class BlogProvider extends Component {
    constructor() {
        super()
        this.state = {
            blogs: []
        }
    } 

    render() {
        return ( 
            <div>
                <Provider  
                     value={{}}> 
                { this.props.children  }
                </Provider>
            </div>
        )
    }
}

export const withBlog = C => props => (
    <Consumer>
        { value => <C { ...value } { ...props  }/>}
    </Consumer>
)

export default BlogProvider
import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class AuthProvider extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    } 

    render() {
        return ( 
            <div>
                <Provider  
                    value={{
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
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
import React from 'react'
import { Component } from 'react'

// class GreetClass extends Component{
//     render(){
//         return <h1>Hello {this.props.name} Form Class Component</h1>
//     }


// }

class GreetClass extends Component{
    render(){
        const {name} = this.props
        return <h1>Hello {name} Form Class Component</h1>
    }


}
export default GreetClass;
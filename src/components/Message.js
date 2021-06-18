import { render } from '@testing-library/react'
import reacr from 'react'
import { Component } from 'react'


class Message extends Component {
    constructor(){
        super()
        this.state ={
            message : 'Hello Visitor',
        }
    }
    message() {
        this.setState({
            message : "Thanks"
                })
            }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.message()}>Update Button</button>
            </div>
        )
    }
} 
export default Message;
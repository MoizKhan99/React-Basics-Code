import react from 'react'
import { Component } from 'react';


class EventHandlerClass extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome",
        }
    }
    onPress(){
        this.setState({
            message : 'Bye'
        })
    }

render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.onPress.bind(this)}>Change</button>
        </div>
    )
}
}

export default EventHandlerClass
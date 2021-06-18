import react from  'react'
import { Component } from 'react';

class ClassClick extends Component{

onPress() {
    console.log("clicked from class")
    }


    render(){
        return(
            <div>
                <button onClick={this.onPress}>Click</button>
            </div>
        )
    }
}

export default ClassClick;
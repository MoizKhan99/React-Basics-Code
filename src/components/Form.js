import react from 'react'
import { Component } from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            userName : '',
            comments : '',
            topic : 'math',
        }
    }
    ChangeUsername = (event) =>{
        this.setState({
            userName : event.target.value
        })
    }

    ChangeComments = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    ChangeTopic = (event) =>{
        this.setState({
            topic : event.target.value
        })
    }

    subbmit = (event) =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault()    
    }









    render(){
        return(
            <form onSubmit={this.subbmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" onChange={this.ChangeUsername}
                     value={this.state.userName}  />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea type="text" onChange={this.ChangeComments}
                      value={this.state.comments} ></textarea>
                </div>

                <div>
                    <select onChange={this.ChangeTopic} 
                     value={this.state.topic}>
                        <option value="physics">physics</option>
                        <option value="chemistry">chemistry</option>
                        <option value="math">math</option>
                    </select>
                </div>

                <button>Submit</button>
            </form>

        )
    }
}
export default Form;
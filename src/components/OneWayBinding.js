import {Component} from "react"

export class OneWayBinding extends Component{
    constructor(){
        super();
        this.state={
            name:""
        }
    }
    handleChange=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input placeholder="type here" onChange={this.handleChange}/>
                <h1>The value you have provided is {this.state.name}</h1>
            </div>
        )
    }
}
// export function Main(props){
//     return <h1>I am{props.myName}</h1>;
// }

import {Component} from "react";
export class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            myName:"MSD",
            myAge:"40",
            myRole:"Captain"
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick=()=>{
        this.setState({
            myName:"Mugil",
            myAge:"21"
        });
    }
    render() {
        return(
            <div>
                <h1>I am a {this.props.myRole}</h1>
                <h1>I am  {this.state.myName} {this.state.myAge} years old.I was a {""} {this.state.myRole}</h1>
                <button onClick={this.handleClick}>changeState</button>
            </div>
        )
    }
}



// {this.props.myName}

// Main.defaultProps={
//     myName:"Developer"
// }

// {this.props.myRole}

// constructor(props){
//     super(props)
// }
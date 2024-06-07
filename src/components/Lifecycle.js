import { Component } from "react"
import { Lifecycle2 } from "./Lifecycle2"
export class Lifecycle extends Component {
    constructor() {
        console.log("Constructor is executed")
        super();
        this.state = {
            name: "Mugesh",
            bool: true
        }
    }
    static getDerivedStateFromProps(p,s){
        console.log(p,s)
        return null;
    }
    componentDidMount(){
        console.log("Component mounts")
    }
    handleClick = () => {
        this.setState({
            name: "Mugil",
           

        });
    }
    shouldComponentUpdate(){
        console.log("Should component update");
        return true;
    }
    getSnapshotBeforeUpdate(p,s){
        console.log(p,s)
        return null;
    }
    componentDidUpdate(){
        console.log("component updated")
    }
    render() {
        console.log("Render is executed")
        return (
            <div>
                <h1>{this.props.hi}</h1>
                <h1>My name is {this.state.name}</h1>
                <button onClick={this.handleClick}>changeState</button>
                {(this.state.bool)?<Lifecycle2 />:null}
            </div>
        )
    }
}

Lifecycle.defaultProps={
    hi:"lifecycle methods"
}


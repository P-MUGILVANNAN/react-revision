import {Component} from "react"

export class Lifecycle2 extends Component{
    componentWillUnmount(){
        console.log("component will unmount is updated")
    }
    render(){
        return(
            <div></div>
        )
    }
}
    
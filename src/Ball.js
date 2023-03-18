import React, {Component} from"react"
import"./Ball.css";

class Ball extends Component {
    render () {
        console.log("Color prop is: ", this.props.color)
        return <div className='Ball' style={{backgroundColor: this.props.color}}>{this.props.num}</div>

        
    }
}
export default Ball;

// Code DigitalClicker Component Here
import React, {Component} from 'react'
class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler(e) {
        this.setState(prevState => {
            return {timesClicked: (prevState.timesClicked + 1)}
        })
    }

    render() {
        return (
                <button onClick={this.clickHandler.bind(this)} >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
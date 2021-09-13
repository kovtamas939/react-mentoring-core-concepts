import React from 'react'

import './Counter.css'

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
        this.decreaseNumber = this.decreaseNumber.bind(this)
        this.increaseNumber = this.increaseNumber.bind(this)
    }

    decreaseNumber() {
        this.setState({number: this.state.number - 1})
    }

    increaseNumber() {
        this.setState({number: this.state.number + 1})
    }
    
    render () {
        return (
            <div className="Counter-block">
                <div className="Buttons">
                    <button onClick={this.decreaseNumber}>decrease</button>
                    <button onClick={this.increaseNumber}>increase</button>
                </div>
                <p>{this.state.number}</p>
            </div>
        )
    }
}

export default Counter
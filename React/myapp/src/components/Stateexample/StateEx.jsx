import React, { Component } from 'react'

class StateEx extends Component {
    constructor() {
        super()
        this.state = {
            color: "Pink",
        }
    }
    handleChange = () => {
        this.setState({ color: "blue" })
    }
    render() {
        return (
            <div>
                <hr />
                <button onClick={this.handleChange} className='btn btn-info'>Click </button>
                <p>{this.state.color}</p>
            </div>
        )
    }
}
export default StateEx;

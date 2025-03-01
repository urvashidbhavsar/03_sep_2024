import { Component } from "react";

class Classcompex extends Component {
    constructor() {
        super()
        this.myval = 10
    }
    render() {
        return (
            <div>
                <h1>Class Execute at {this.myval} time</h1>
            </div>
        )
    }
}
export default Classcompex;
import React, {Component} from 'react';

class Helloworld2 extends Component {
    constructor() {
        super();
        this.institute = "Unitec";
    }

    clickMe() {
        alert("From Helloworld2.js");
    }

    render() {
        return (
            <div>
                <h1>Hello World2</h1>
                <button onClick={this.clickMe}>Click Me</button>
                <button onClick={this.props.clickMe}>Click Me</button>
                <p>
                    my name is {this.props.name} <br />
                    I am {this.props.age} years old. <br />
                    I am a student at {this.institute}.
                </p>
            </div>
        );
    }
}

export default Helloworld2;
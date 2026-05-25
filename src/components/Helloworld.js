import React from 'react';

function Helloworld(props) {
    function clickMe() {
        alert("From Helloworld.js");
    }

    var institute = "Unitec";
    return (
        [
            <div>
                <h1>Hello World</h1>
                <button onClick={clickMe}>Click Me</button>
                <button onClick={props.clickMe}>Click Me</button>
            </div>,
            <div>
                <p>
                    my name is {props.name} <br />
                    I am {props.age} years old. <br />
                    I am a student at {institute}.
                </p>
            </div>
        ]
    );
}

export default Helloworld;
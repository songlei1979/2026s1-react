import React, {useState} from 'react';

function Condition(props) {
    const [name, setName] = useState("Simon");




    function changeName() {
        if (name === "Jone") {
            setName("John");
        }
        else{
            setName("Jone");
        }
    }

    return (
        <div>
            <h1>Condition</h1>
            <p>My name is {name}</p>
            <button onClick={changeName}>
                Change Name
            </button>
        </div>
    );
}

export default Condition;
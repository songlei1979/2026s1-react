import React, {useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Simon");
    const [names, setNames] = useState([]);

    function addName() {
        setNames([...names, name]);
    }

    function changeName() {
        if (name === "Simon"){
            setName("Jone");
        }else {
            setName("Simon");
        }
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
            <button onClick={() => setCount(count - 1)}>
                Sub
            </button>
            <h2>{name}</h2>
            <button onClick={changeName}>Change Name</button>
            <h2>Names</h2>
            {names.map(name =>
                <p key={name}>{name}</p>
            )}
            <button onClick={addName}>Add Name</button>
        </div>
    );
}

export default Counter;
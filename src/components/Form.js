import React, {useState} from 'react';

function Form(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    return (
        <div>
            <input type="text" value={username}
                   onChange={usernameHandler}/>
            <input type={"password"} value={password}
                   onChange={passwordHandler}/>
            <p>{username}</p>
            <p>{password}</p>
            <button type="submit">Submit</button>
        </div>
    );
}

export default Form;
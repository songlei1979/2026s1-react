import React, {useState} from 'react';
import axios from "axios";

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function first_nameHandler(e){
        setFirstName(e.target.value)
    }

    function last_nameHandler(e){
        setLastName(e.target.value)
    }

    function emailHandler(e){
        setEmail(e.target.value)
    }

    function postRequest() {
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "email": email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Username: <input type="text" onChange={usernameHandler}/></p>
            <p>Password: <input type="password" onChange={passwordHandler}/></p>
            <p>First Name: <input type="text" onChange={first_nameHandler}/></p>
            <p>Last Name: <input type="text" onChange={last_nameHandler}/></p>
            <p>Email: <input type="email" onChange={emailHandler}/></p>
            <button onClick={postRequest}>Register</button>
        </div>
    );
}

export default Register;
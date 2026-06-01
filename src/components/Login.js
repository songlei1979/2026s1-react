import React, {useEffect, useState} from 'react';
import axios from "axios";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [token, setToken] = useState("")
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLogin(true)
            setToken(localStorage.getItem("token"))
        }
    }, [])

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data.token));
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
            })
            .catch((error) => {
                setError("Wrong username and password")
            });
    }

    return (
        isLogin ?
            <div>
                <button>Logout</button>
            </div> :
            <div>
                <p>Username: <input type="text" onChange={usernameHandler}/></p>
                <p>Password: <input type="password" onChange={passwordHandler}/></p>
                <p>{error}</p>
                <button onClick={login}>Login</button>

            </div>
    );
}

export default Login;
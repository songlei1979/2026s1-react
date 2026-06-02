import React, {useEffect, useState} from 'react';
import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";

function PostList(props) {
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState("")

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("token exists")
            console.log(localStorage.getItem("token"))
            setToken(localStorage.getItem("token"))
        } else {
            window.location.href = "/login"
        }
        getPosts()
    }, [token])

    function getPosts() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/posts_router/',
            headers: {
                'Authorization': 'token '+token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch((error) => {
                console.log("loading");
            });

    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
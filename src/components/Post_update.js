import React, {useEffect, useState} from 'react';
import axios from "axios";
import base_url from "../constraints";

function PostUpdate(props) {
    const [post, setPost] = useState({});
    const [token, setToken] = useState("");
    const [categories, setCategories] = useState([]);
    const [post_id, setPost_id] = useState(2);
    const [author_id, setAuthor_id] = useState();
    const [category_id, setCategory_id] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        } else {
            window.location.href = "/login"
        }
        getCategories();
        getPost();
        getUserID();
    }, [token]);

    // get categories
    function getCategories() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/categories/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setCategories(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // get category id, title and body
    function getPost() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: base_url+'/posts_router/2',
            headers: {
                'Authorization': 'token ' + token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCategory_id(response.data.category)
                setTitle(response.data.title)
                setBody(response.data.body)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //get user ID
    function getUserID() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/auth/get_auth_id/',
            headers: {
                'Authorization': 'token '+token
            }
        };

        axios.request(config)
            .then((response) => {
                setAuthor_id(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    function updatePost() {
        let data = JSON.stringify({
            "title": title,
            "body": body,
            "category": category_id,
            "author": author_id,
            "id": post_id
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/posts_router/' + post_id + '/',
            headers: {
                'Authorization': 'token ' + token,
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

    function titleHandler(e) {
        setTitle(e.target.value);
    }

    function bodyHandler(e) {
        setBody(e.target.value);
    }

    function categoryHandler(e) {
        setCategory_id(e.target.value);
    }


    return (
        <div>
            <h2>Update Post</h2>
            <p>Title: <input type="text" value={title} onChange={titleHandler}></input></p>
            <p>Body: <textarea value={body} onChange={bodyHandler}></textarea></p>
            <p>Category: <select value={category_id} onChange={categoryHandler}>
                {categories.map(category => (
                    <option key={category.id} value={category.id} selected={category.id === category_id}>{category.name}</option>
                ))}
            </select></p>
            <p><input type="hidden" value={author_id}></input></p>
            <p><input type="hidden" value={post_id}></input></p>
            <button onClick={updatePost}>Update Post</button>
        </div>
    );
}

export default PostUpdate;
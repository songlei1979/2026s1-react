import React, {useEffect, useState} from 'react';
import axios from "axios";

function Loadposts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div>
            {posts.map(post =>
                <p key={post.id}>{post.title}</p>
            )}
        </div>
    );
}

export default Loadposts;
import React, {useEffect, useState} from 'react';

function Loadingdata(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
                response.json()
            )
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post =>
                <p key={post.id}>{post.title}</p>
            )}
        </div>
    );
}

export default Loadingdata;
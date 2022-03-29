import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    return (
        <div>
            <h2>This Post Details for {postId}</h2>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;
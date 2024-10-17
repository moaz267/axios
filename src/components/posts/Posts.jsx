import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

        async function fetchPosts() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                setPosts(data); 
            } catch (error) {
                setError(error);
            }
        }

        useEffect(() => {
            fetchPosts();
        }, []);

    return (
        <div>
            <ul>
                {error===null?posts.map((post) => (
                    <li key={post.id}>{post.title}</li> 
                    
                )): <h1>{error.message}</h1>}
            </ul>
        </div>
    );
}
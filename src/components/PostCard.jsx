import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ title, desc,id ,category }) {
    return (
        
        <Link to={`/posts/${category}/${id}/${title}`} className="post_card">
            <h5>{category}</h5>
            <h4>title:"[{title}]"</h4>
            <p>{desc}</p>
        </Link>
    );
}

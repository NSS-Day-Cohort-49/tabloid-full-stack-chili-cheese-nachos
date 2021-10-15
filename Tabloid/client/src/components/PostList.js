import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts, deletePost } from "../modules/postManager";
import { Button } from "reactstrap";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    const getPostsFromState = () => {
        return getAllPosts().then(posts => setPosts(posts))
    }

    const handleDelete = postId => {
        deletePost(postId)
            .then(getPostsFromState())
    }

    useEffect(() => {
        getPostsFromState()
    }, [])

    return (
        <section>
            {posts.map(
                p => <Post key={p.id} post={p} handleDelete={handleDelete}/>
            )}
        </section>
    );
}
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { deletePost, getPostsByUserId } from "../modules/postManager";

const UserPostList = () => {
    const [posts, setPosts] = useState([]);

    const getPostsFromState = () => {
        return getPostsByUserId().then(posts => setPosts(posts))
    }

    const handleDelete = postId => {
        deletePost(postId)
            .then(getPostsFromState())
    }

    useEffect(() => {
        getPostsFromState()
    }, [])

    return (
        <>
            <section>
                {posts.map(
                    post => <Post key={post.id} post={post} handleDelete={handleDelete}/>
                )}
            </section>
        </>
    );
}

export default UserPostList
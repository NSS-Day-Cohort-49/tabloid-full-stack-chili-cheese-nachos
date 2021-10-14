import React, { useEffect, useState } from "react";
import Post from "./Post";
import { deletePost, getPostsByUserId } from "../modules/postManager";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";

const UserPostList = ({post}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsByUserId().then(setPosts);
    }, [])

    return (
        <>
            <section>
                {posts.map(
                    post => <Post key={post.id} post={post}/>
                )}
            </section>
        </>
    );
}

export default UserPostList
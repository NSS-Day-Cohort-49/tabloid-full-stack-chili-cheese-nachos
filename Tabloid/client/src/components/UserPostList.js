import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPostsByUserId } from "../modules/postManager";
import { useParams } from "react-router-dom";

export default function UserPostList() {
    const [posts, setPosts] = useState([]);

    // const { id } = useParams()

    useEffect(() => {
        getPostsByUserId().then(setPosts);
    }, [])

    return (
        <section>
            {posts.map(
                p => <Post key={p.id} post={p} />
            )}
        </section>
    );
}
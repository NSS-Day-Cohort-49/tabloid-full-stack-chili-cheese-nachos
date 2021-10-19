import React, { useEffect, useState } from "react"
import Post from "./Post"
import { getAllPosts, deletePost } from "../modules/postManager"
import { Button } from "reactstrap"
import { useHistory } from "react-router"

export default function PostList() {
    const [posts, setPosts] = useState([])

    const history = useHistory()

    const getPostsFromState = () => {
        return getAllPosts().then((posts) => setPosts(posts))
    }

    const handleDelete = (postId) => {
        if (
            window.confirm(
                `Are you sure you want to delete? Press OK to confirm.`
            )
        ) {
            deletePost(postId).then(getPostsFromState())
        } else {
            history.push("/")
        }
    }

    useEffect(() => {
        getPostsFromState()
    }, [])

    return (
        <section>
            {posts.map((p) => (
                <Post key={p.id} post={p} handleDelete={handleDelete} />
            ))}
        </section>
    )
}

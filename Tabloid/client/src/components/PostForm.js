import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getAllCategories } from "../modules/categoryManager";
import { addPost, getPostById, updatePost } from "../modules/postManager";

export default function PostForm() {
    const history = useHistory();
    const [post, setPost] = useState({})
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    // useEffect(() => {
    //     getAllCategories()
    //         .then(res => {
    //             setCategories(res)
    //             setIsLoading(false)
    //         })
    // }, [])

    useEffect(() => {
        if (params.id) {
            getPostById(params.id).then(p => {
                setPost(p)
                setIsLoading(false)
            })
        } 
        getAllCategories().then(setCategories)
    }, [])

    const handleInputChange = e => {
        const postCopy = { ...post }
        postCopy[e.target.id] = e.target.value
        setPost(postCopy)
    }

    const handleSave = e => {
        e.preventDefault()
        if (params.id) {
            setIsLoading(true)
            updatePost(post)
            .then(()=>{
                history.push("/post")
            })
        } else {
            addPost(post)
                .then(() => {
                    history.push("/post")
                })
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    value={post.title}
                    onChange={handleInputChange}
                />
                <Label for="content">Content</Label>
                <Input type="text" name="content" id="content" placeholder="content" value={post.content} onChange={handleInputChange} />
                <Label for="category">Category</Label>
                <select name="categoryId" id="categoryId" className="form-control" value={post.categoryId} onChange={handleInputChange}>
                    <option value="0">Select a category</option>
                    {categories.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <Label for="imageLocation">Header Image</Label>
                <Input type="text" name="imageLocation" id="imageLocation" placeholder="Image URL" value={post.imageLocation} onChange={handleInputChange} />
                <Label for="publishDateTime">Publication Date</Label>
                <Input type="date" name="publishDateTime" id="publishDateTime" placeholder="Publication Date" valid={post.publishDateTime} onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>
                Submit
            </Button>
        </Form>
    )
}
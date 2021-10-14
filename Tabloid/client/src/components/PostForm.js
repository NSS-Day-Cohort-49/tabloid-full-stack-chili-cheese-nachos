import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getAllCategories } from "../modules/categoryManager";
import { addPost } from "../modules/postManager";

export default function PostForm() {
    const history = useHistory();
    const [post, setPost] = useState({})
    const [categories, setCategories] = useState([])
    // const [selectedCategory, setSelectedCategory] = useState({})
    // const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getAllCategories()
            .then(res => {
                setCategories(res)
            })
    }, [])

    const handleInputChange = e => {
        const value = e.target.value;
        const key = e.target.id;

        const postCopy = { ...post }
        postCopy[key] = value
        setPost(postCopy)
    }

    const handleSave = e => {
        e.preventDefault()
        // setIsLoading(true);
        addPost(post)
        .then(() => {
            history.push("/post")
        })
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
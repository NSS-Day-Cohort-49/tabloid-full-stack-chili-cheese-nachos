import React, { useState } from "react"
import { useHistory, useParams } from "react-router"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { addCategory } from "../../modules/categoryManager"

const CategoryForm = () => {
    const history = useHistory()

    const [category, setCategory] = useState({
        name: "",
    })

    const { categoryId } = useParams()

    const handleInputChange = (evt) => {
        const value = evt.target.value
        const key = evt.target.id

        const categoryCopy = { ...category }

        categoryCopy[key] = value
        setCategory(categoryCopy)
    }

    const handleSave = (evt) => {
        evt.preventDefault()

        addCategory(category).then(() => {
            history.push("/category")
        })
    }

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="category name"
                    value={category.name}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>
                Submit
            </Button>
        </Form>
    )
}

export default CategoryForm

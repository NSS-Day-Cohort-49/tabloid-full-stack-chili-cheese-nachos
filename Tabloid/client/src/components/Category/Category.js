import React from "react"
import { Card, CardBody, CardFooter } from "reactstrap"
import { deleteCategory, getAllCategories } from "../../modules/categoryManager"
import { useHistory } from "react-router"

const Category = ({ category }) => {
    const history = useHistory()

    const handleDelete = (evt) => {
        evt.preventDefault()

        deleteCategory(category.id).then(window.location.reload())
    }

    return (
        <Card className="m-4">
            <CardBody>{category.name}</CardBody>
            <CardFooter>
                <button className="deleteCat" onClick={handleDelete}>
                    Delete
                </button>
                <button
                    className="updateCat"
                    onClick={() => {
                        history.push(`/category/edit/${category.id}`)
                    }}
                >
                    Edit
                </button>
            </CardFooter>
        </Card>
    )
}

export default Category

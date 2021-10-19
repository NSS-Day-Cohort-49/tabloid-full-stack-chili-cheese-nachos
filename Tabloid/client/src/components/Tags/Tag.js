import React from "react"
import { useHistory } from "react-router"
import { Card, CardBody, CardFooter } from "reactstrap"
import { deleteTag } from "../../modules/tagManager"

const Tag = ({ tag }) => {
    const history = useHistory()

    const handleDelete = (evt) => {
        if (
            window.confirm(
                `Are you sure you want to delete "${tag.name}"? Press OK to confirm.`
            )
        ) {
            deleteTag(tag.id).then(window.location.reload())
        } else {
            history.push("/tag")
        }
    }

    return (
        <Card className="m-4">
            <CardBody>
                <strong>{tag.name}</strong>
                <button
                    className="btn btn-dark float-right"
                    onClick={handleDelete}
                >
                    Delete
                </button>
                <button
                    className="btn btn-danger float-right"
                    onClick={() => {
                        history.push(`/tag/edit/${tag.id}`)
                    }}
                >
                    Edit
                </button>
            </CardBody>
        </Card>
    )
}

export default Tag

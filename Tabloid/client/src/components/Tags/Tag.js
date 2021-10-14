import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody, CardFooter } from "reactstrap";
import { deleteTag } from "../../modules/tagManager";


const Tag = ({ tag }) => {
  const history = useHistory()

  const handleDelete = (evt) => {
    evt.preventDefault()

    deleteTag(tag.id).then(window.location.reload())
  }

  return (
    <Card className="m-4">
      <CardBody>
          <strong>{tag.name}</strong>
      </CardBody>
      <CardFooter>
        <button className="deleteTag" onClick={handleDelete}>
          Delete
        </button>

      </CardFooter>
    </Card>
  );
}

export default Tag
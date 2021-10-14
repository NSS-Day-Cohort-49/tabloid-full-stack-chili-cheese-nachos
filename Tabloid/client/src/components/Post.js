import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Post({ post, handleDelete }) {

  return (
    <Card className="m-4">
      <CardBody>
        <strong><Link to={`/post/${post.id}`}>{post.title}</Link> | {post.category.name}</strong>
        <p>{post.content}</p>
        <div className="font-weight-bold">{post.userProfile.displayName}</div>
        <Button className="btn btn-danger float-right" onClick={() => handleDelete(post.id)}>Delete</Button>
      </CardBody>
    </Card>
  );
}
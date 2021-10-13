import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Card className="m-4">
      <CardBody>
        <strong><Link to={`/post/${post.id}`}>{post.title}</Link> | {post.category.name}</strong>
        <p>{post.content}</p>
        <div className="font-weight-bold">{post.userProfile.displayName}</div>
      </CardBody>
    </Card>
  );
}
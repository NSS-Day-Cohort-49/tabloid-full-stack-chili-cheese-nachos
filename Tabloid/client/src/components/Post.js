import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Post({ post }) {
  return (
    <Card className="m-4">
      <CardBody>
        <strong>{post.title} | {post.category.name}</strong>
        <p>{post.content}</p>
        <div className="font-weight-bold">{post.userProfile.displayName}</div>
      </CardBody>
    </Card>
  );
}
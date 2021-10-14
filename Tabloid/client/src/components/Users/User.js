import React from "react";
import { Card, CardBody } from "reactstrap";

export default function User({ user }) {
  return (
    <Card className="m-4">
      <CardBody>
          <strong>{user?.fullName}</strong>
          <div>{user?.displayName}</div>
          <div>{user?.userType.name}</div>
      </CardBody>
    </Card>
  );
}
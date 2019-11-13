import React from "react";
import { Card } from "reactstrap";

const IssueDetails = props => {
  console.log("issue props", props);
  return (
    <Card>
      <h2>Name: {props.issue}</h2>
      <h4>Details: {props.details}</h4>
    </Card>
  );
};

export default IssueDetails;

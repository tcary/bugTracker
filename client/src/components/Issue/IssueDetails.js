import React from "react";
import { Card } from "reactstrap";
import "./style.scss";

const IssueDetails = props => {
  console.log("issue props", props);
  return (
    <>
      <Card className="card">
        <h2>Name: {props.issue}</h2>
      </Card>
      <Card className="card">
        <h4>Details: {props.details}</h4>
      </Card>
    </>
  );
};

export default IssueDetails;

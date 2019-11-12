import React from "react";
import { Card } from "reactstrap";

const IssueDetails = props => {
  console.log("issue props", props);
  return (
    <Card>
      <h2>{props.details}</h2>
      {/* <h4>{issue.details}</h4> */}
    </Card>
  );
};

export default IssueDetails;

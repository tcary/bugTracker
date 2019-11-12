import React from "react";
import { Card } from "reactstrap";

const IssueDetails = props => {
  console.log("issue props", props.details);
  return (
    <Card>
      <h2>{/* <strong>Detailed Issue Info for {issue.issue}:</strong> */}</h2>
      {/* <h4>{issue.details}</h4> */}
    </Card>
  );
};

export default IssueDetails;

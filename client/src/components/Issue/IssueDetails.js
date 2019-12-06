import React from "react";
import { Card } from "reactstrap";
import "./style.scss";

const IssueDetails = props => {
  console.log("issue props", props);
  return (
    <>
      <Card>
        <h2>{props.issue}</h2>
      </Card>
     
      {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{props.details}</textarea> */}
      
    </>
  );
};

export default IssueDetails;

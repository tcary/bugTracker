import React from "react";
import TextEditor from "./TextEditor";
import { Card } from "reactstrap";
import "./style.scss";

const IssueDetails = props => {
  console.log("issue props", props);
  return (
    <>
      <Card>
        <h2>{props.issue}</h2>
      </Card>
      <TextEditor
      // key={this.state.issue.id}
      // issue={this.state.issue.issue}
      // details={this.state.issue.details}
      // projectId={this.state.issue.projectId}
      />
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      >
        {props.details}
      </textarea>
    </>
  );
};

export default IssueDetails;

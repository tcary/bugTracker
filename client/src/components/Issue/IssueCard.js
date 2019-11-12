import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const border = "2px solid green";
const IssueWrapper = styled.article`
  .card {
    border: ${props => (props.isActive ? "2px solid teal" : "1px solid gray")};
    text-align: center;
  }
  img {
    width: 30px;
    border: ${border};
  }
`;

const IssueCard = props => {
  console.log(props);
  return (
    <Col onClick={props.setSelectedIssue}>
      <IssueWrapper isActive={props.isActive}>
        <Card>
          <CardHeader>{props.issue}</CardHeader>
          <CardBody>
            <h2>{props.details}</h2>
          </CardBody>
        </Card>
      </IssueWrapper>
    </Col>
  );
};

export default IssueCard;

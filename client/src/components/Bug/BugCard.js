import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const border = "2px solid green"
const BugWrapper = styled.article`
.card {
    border: ${props => props.isActive ? "2px solid teal" : "1px solid gray"};
    text-align: center;
}
img {
    width: 30px;
    border: ${border}
}
`

const BugCard = props => {
    console.log(props);
    return (
        <Col onClick={props.setSelectedBug}>
            <BugWrapper isActive={props.isActive}>
                <Card>
                    <CardHeader>{props.bug}</CardHeader>
                    <CardBody>
                        <h2>{props.details}</h2>
                    </CardBody>
                </Card>
            </BugWrapper>
        </Col>
    )
}

export default BugCard;
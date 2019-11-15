import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <Container style={{ width: "70%" }}>
      <Row>
        <Col size="md-2">
          <Link to="/projects">← Back to Projects</Link>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <img
                src="./img/logo1.jpg"
                alt="Robot with broken parts"
                style={{ width: "25%", height: "25%", marginTop: "7%" }}
              ></img>
              {/* <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span> */}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;

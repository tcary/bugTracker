import React, { Component } from "react";
// import IssueCard from "../components/Issue/IssueCard";
import IssueDetails from "../components/Issue/IssueDetails";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";

class EditDetail extends Component {
  state = {
    issue: "",
    details: ""
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.loadIssues();
  }
  loadIssues = () => {
    // console.log("how to see the res", this.state);
    API.getDetail(this.props.match.params.id)
      .then(res =>
        this.setState({ details: res.data.details, issue: res.data.issue })
      )
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.issue && this.state.details) {
  //     API.saveIssue({
  //       issue: this.state.issue,
  //       details: this.state.details
  //     })
  //       .then(res => this.loadIssues())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    // console.log("???", this.state.details);
    // console.log(this.state);
    return (
      <Container style={{ width: "80%" }}>
        <Row>
          <Col size="md-2">
            <Link to="/projects">← Back to Projects</Link>
          </Col>
        </Row>

        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Description Of The Issue</h1>
            </Jumbotron>
            {this.state.details ? (
              <IssueDetails />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditDetail;

import React, { Component } from "react";
// import IssueCard from "../components/Issue/IssueCard";
import IssueDetails from "../components/Issue/IssueDetails";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";

class EditDetail extends Component {
  state = {
    issue: "",
    details: ""
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.loadIssues(this.props.match.params.id);
  }
  loadIssues = id => {
    // console.log("how to see the res", this.state);
    API.getDetail(id)
      .then(res => console.log(res))
      // .then(res => this.setState({ issue: res.data, issue: "", details: "" }))
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
    console.log("???", this.state.issues);
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
            {this.state.issue ? (
              <IssueDetails />
            ) : (
              //   <List>
              //     {/* {this.state.issue} */}
              //     <ListItem key={issues._id}>
              //       <strong>{issue.details}</strong>
              //     </ListItem>
              //     )}
              //   </List>
              <h3>No Results to Display</h3>
            )}
          </Col>
          {/* <Col size="md-6 sm-12">
            {this.state.issues.length ? (
              <IssueDetails />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default EditDetail;

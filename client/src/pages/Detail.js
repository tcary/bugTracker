import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ToggleDisplay from "react-toggle-display";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      issue: "",
      details: "",
      // projectId: this.props.match.params,
      show: false
    };
  }

  // Add code to get the project with an _id equal to the id in the route param
  // e.g. http://localhost:3000/projects/:id
  // The project id for this route can be accessed using this.props.match.params.id

  // componentDidMount() {
  //   API.getProject(this.props.match.params.id)
  //     .then(res => this.setState({ project: res.data }))
  //     .catch(err => console.log(err));
  // }
  componentDidMount() {
    this.loadIssues();
  }
  loadIssues = () => {
    // console.log(res);
    API.getProject(this.props.match.params.id)
      .then(res =>
        this.setState({ issues: res.data.issues, issue: "", details: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    //event.preventDefault();
    this.setState({ show: !this.state.show });
    if (this.state.issue && this.state.details && this.state.show) {
      API.saveIssue({
        issue: this.state.issue,
        details: this.state.details,
        projectId: this.props.match.params.id
      })
        .then(res => this.loadIssues())
        .catch(err => console.log(err));
    }
  };

  render() {
    // console.log(this.state.issues)
    // console.log(this.state);
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
              <h1>Issues</h1>
            </Jumbotron>
            {this.state.issues.length ? (
              <List>
                {this.state.issues.map(issue => (
                  <ListItem key={issue._id}>
                    <Link to={"/issues/details/" + issue._id}>
                      <strong>{issue.issue}</strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteProject(project._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6">
            <FormBtn
              // disabled={!(this.state.issue && this.state.details)}
              onClick={() => this.handleFormSubmit()}
            >
              + Submit an Issue
            </FormBtn>
            <ToggleDisplay show={this.state.show}>
              <form>
                <Input
                  value={this.state.issue}
                  onChange={this.handleInputChange}
                  name="issue"
                  placeholder="Name Of The Issue (required)"
                />
                <TextArea
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder="Description (required)"
                />
              </form>
            </ToggleDisplay>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Description Of The Issue</h1>
            </Jumbotron>
            {this.state.issues.length ? (
              <List>
                {this.state.issues.map(issue => (
                  <ListItem key={issue._id}>
                    <strong>
                      {issue.details}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Detail;

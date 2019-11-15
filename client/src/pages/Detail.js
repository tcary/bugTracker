import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ToggleDisplay from "react-toggle-display";
import Dropdown from "../components/Dropdown";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      filteredIssues: [], // added to make a copy of issues
      issue: "",
      details: "",
      projectId: this.props.match.params,
      show: false
    };
  }

  // calling the database for all issues associated with one project
  componentDidMount() {
    this.loadIssues();
  }
  loadIssues = () => {
    // console.log(res);
    API.getProject(this.props.match.params.id)
      .then(res =>
        this.setState({
          issues: res.data.issues,
          filteredIssues: res.data.issues
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteIssue = id => {
    API.deleteIssue(id)
      .then(res => this.loadIssues())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    // event.preventDefault();
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

  // function to sort the filteredIssues based on boolean
  filteredIssues = type => {
    if (type === "resolved") {
      const issues = this.state.issues.filter(issue => issue.resolved);
      this.setState({ filteredIssues: issues });
    } else {
      const issues = this.state.issues.filter(issue => !issue.resolved);
      this.setState({ filteredIssues: issues });
    }
  };

  render() {
    return (
      <Container style={{ width: "70%" }}>
        <Row>
          <Col size="md-2">
            <Link to="/projects" style={{ margin: "20px" }}>
              ← Back to Projects
            </Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Issues</h1>
            </Jumbotron>

            {/* this.filteredIssues below call the function that sets the state for filteredIssue*/}
            <Dropdown filteredIssues={this.filteredIssues} />

            {this.state.filteredIssues.length ? (
              <List>
                {this.state.filteredIssues.map(issue => (
                  <ListItem key={issue._id}>
                    <Link to={"/issues/details/" + issue._id}>
                      <strong>{issue.issue}</strong>
                      {issue.resolved ? (
                        <strong style={{ float: "right" }}>
                          <span> Resolved </span>{" "}
                          <DeleteBtn
                            onClick={() => this.deleteIssue(issue._id)}
                          />
                        </strong>
                      ) : (
                        <strong></strong>
                      )}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{ color: "white" }}>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6">
            <FormBtn onClick={() => this.handleFormSubmit()}>
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
        </Row>
      </Container>
    );
  }
}

export default Detail;

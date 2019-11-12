import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import ToggleDisplay from "react-toggle-display";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      title: "",
      show: false
    };
  }

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data, title: "" }))
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // event.preventDefault();
    this.setState({ show: !this.state.show });
    if (this.state.title) {
      API.saveProject({
        title: this.state.title
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  render() {
    // console.log(this.state);
    return (
      <Container style={{ width: "60%" }}>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>Submit a Project</h1>
            </Jumbotron> */}
            <FormBtn
              // disabled={!(this.state.title)}
              onClick={this.handleFormSubmit}
            >
              + Add a Project
            </FormBtn>
            <ToggleDisplay show={this.state.show}>
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Project Title (required)"
                />
              </form>
            </ToggleDisplay>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Projects</h1>
            </Jumbotron>
            {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <Link to={"/projects/" + project._id}>
                      <strong>{project.title}</strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteProject(project._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;

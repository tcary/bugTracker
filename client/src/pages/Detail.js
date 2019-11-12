import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ToggleDisplay from 'react-toggle-display';

// const Detail = () => {

//   const [data, setData] = useState({
//     bugs: ["hello"],
//     selectedBug: null,
//     project: ""
//   })

//   const getProject = id => {
//     API.getProject(id)
//       .then(res => {
//         console.log(res);
//         setData({
//           bugs: res.data,
//           selectedBug: null,
//           project: res.data.title
//         })
//       })
//       .catch(err => console.log(err));
//   }

//   const { bugs, selectedBug, project } = data;

//   useEffect(() => {
//     getProject()
//     document.title = `Details on ${selectedBug}`;
//   }, [selectedBug]);

//   const setSelectedBug = bug => {
//     setData({
//       ...data,
//       selectedBug: bug
//     });
//   }

//   return (
//     <Container>
//       <Row>
//         <Col md={6}><h1>Bugs for {project}</h1></Col>
//         <Col md={6}><h1>Details for {selectedBug}</h1></Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <List>
//             {bugs.map(bug => (
//               <ListItem
//                 key={bug.id}
//                 id={bug.id}
//                 bug={bug.title}
//                 isActive={bug === selectedBug}
//               />
//             ))}
//           </List>
//           {/* <BugCard
//             key={bug.id}
//             id={bug.id}
//             bug={bug.title}
//             isActive={bug === selectedBug}
//           /> */}
//         </Col>
//         <Col md={6}>
//           {selectedBug ? (
//             <BugDetails
//               bug={selectedBug.details}
//             />
//           ) : (
//               <h3>Click on the bug to the left to see the details!</h3>
//             )}
//         </Col>
//       </Row>
//     </Container>
//   )
class Detail extends Component {
  // state = {
  //   project: {}
  // };
  constructor() {
    super();
    this.state = {
      bugs: [],
      bug: "",
      details: "",
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
    this.loadBugs();
  }
  loadBugs = () => {
    // console.log(res);
    API.getBugs()
      .then(res =>
        this.setState({ bugs: res.data, bug: "", details: "" })
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
    this.setState({ show: !this.state.show })
    if (this.state.bug && this.state.details && this.state.show) {
      API.saveBug({
        bug: this.state.bug,
        details: this.state.details
      })
        .then(res => this.loadBugs())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state.bugs)
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
              <h1>Bugs</h1>
            </Jumbotron>
            {this.state.bugs.length ? (
              <List>
                {this.state.bugs.map(bug => (
                  <ListItem key={bug._id}>
                    <Link to={"/details/" + bug._id}>
                      <strong>
                        {bug.bug}
                      </strong>
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

              // disabled={!(this.state.bug && this.state.details)}
              onClick={() => this.handleFormSubmit()}>

              + Submit a Bug
              </FormBtn>
            <ToggleDisplay show={this.state.show}>
              <form>
                <Input
                  value={this.state.bug}
                  onChange={this.handleInputChange}
                  name="bug"
                  placeholder="Name Of The Issue (required)"
                />
                <TextArea
                  value={this.state.details}
                  onChange={this.handleInputChange}
                  name="details"
                  placeholder="Description (required)"
                />
              </form >
            </ToggleDisplay>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Description Of The Issue</h1>
            </Jumbotron>
            {this.state.bugs.length ? (
              <List>
                {this.state.bugs.map(bug => (
                  <ListItem key={bug._id}>
                    <strong>
                      {bug.details}
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col> */}
        </Row>
      </Container >
    );
  }
}

export default Detail;

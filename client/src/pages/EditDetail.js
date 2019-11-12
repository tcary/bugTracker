import React, { Component } from "react";
import BugCard from "../components/Bug/BugCard";
import BugDetails from "../components/Bug/BugDetails";
import { Col, Row, Container } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class EditDetail extends Component {

    state = {
        bugs: [],
        bug: "",
        details: ""
    };

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
        event.preventDefault();
        if (this.state.bug && this.state.details) {
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
                    <Col size="md-6 sm-12">
                        {this.state.bugs.length ? (
                            <BugDetails />
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
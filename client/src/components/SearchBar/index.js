import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  state = {
    listOfIssues: [],
    issueId: "",
    selectedIssue: "",
    selectedId: "",
    redirect: false
  };
  componentDidMount() {
    API.getIssues()
      // .then(res => console.log("in search", res.data))
      .then(res => {
        const data = res.data;
        this.setState({
          listOfIssues: data
        });

        // .then(res => {
        //     const issueName = res.data.map(item => item.issue)
        //     const issueArray = res.data.map(item => res._id)
        //     this.setState({
        //         listOfIssues: issueName,
        //         issueId: issueId
        //     })
        //     // console.log("id", issueId)
        //     // console.log("name", issueName)

        // })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value, id } = event.target;
    // console.log(
    //   event.target.nextSibling
    //     .querySelector(`option[value='${value}']`)
    //     .getAttribute("id")
    // );
    this.setState({
      selectedIssue: value,
      selectedId: event.target.nextSibling
        .querySelector(`option[value='${value}']`)
        .getAttribute("id")
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.selectedId) {
      this.setState({
        redirect: true
      });
    }
  };

  // renderRedirect = () => {
  // };
  render() {
    // if (this.state.selectedId) {
    //   return <Redirect to={"/issues/details/" + this.state.selectedId} />;
    // }
    if (this.state.redirect) {
      return <Redirect to={"/issues/details/" + this.state.selectedId} />;
    }
    return (
      // <h3>Where are you?</h3>
      <form onSubmit={() => this.handleFormSubmit}>
        <label htmlFor="issue-choice">Issue name:</label>
        <input
          list="issues"
          name="issue-choice"
          className="form-control"
          placeholder="Search Issues"
          value={this.state.selectedIssue}
          id={this.state.selectedId}
          // id={this.state._id}
          onChange={this.handleInputChange}
        />
        <datalist id="issues">
          {this.state.listOfIssues.map(issue => (
            // console.log(issue._id),
            // console.log(issue),
            <option value={issue.issue} key={issue._id} id={issue._id} />
          ))}
        </datalist>
        <button
          id="btn"
          onClick={() => this.handleFormSubmit}
          type="submit"
          className="btn btn-dark btn-block mt-2"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import API from "../../utils/API";

class SearchBar extends Component {
  state = {
    listOfIssues: [],
    selectedIssue: ""
  };

  componentDidMount() {
    API.getIssues()
      // .then(res => console.log("in search", res.data))
      .then(res => {
        const issueArray = res.data.map(item => item.issue);
        //    console.log("issueArray", issueArray)
        this.setState({ listOfIssues: issueArray });
      })
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getIssue(this.state.selectedIssue)
      .then(res =>
        this.setState({
          searchedBreed: this.state.selectedBreed,
          selectedBreed: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      // <h3>Where are you?</h3>
      <form>
        <label htmlFor="issue-choice">Issue name:</label>
        <input
          list="issues"
          id="issue-choice"
          name="issue-choice"
          className="form-control"
          placeholder="Search Issues"
          onChange={this.handleInputChange}
        />
        <datalist id="issues">
          {this.state.listOfIssues.map(issue => (
            <option value={issue} key={issue._id} />
          ))}
        </datalist>
        <button id="btn" type="submit" className="btn btn-dark btn-block mt-2">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;

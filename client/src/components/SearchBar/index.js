import React, { Component } from "react";
import API from "../../utils/API";

class SearchBar extends Component {
    state = {
        listOfIssues: [],
        issueId: "",
        selectedIssue: "",
        selectedId: "" 
    }   

    componentDidMount () {
        API.getIssues()
            // .then(res => console.log("in search", res.data))
            .then(res => {
                const issueName = res.data.map(item => item.issue)
                const issueId = res.data.map(item => item._id)
                this.setState({
                    listOfIssues: issueName,
                    issueId: issueId
                })
                // console.log("id", issueId)
                // console.log("name", issueName)
                
            })
            .catch(err => console.log(err))
            
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ 
            selectedIssue: value,
            // selectedId: value 
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        const id =  
        
        
        API.getIssue(id)
            .then(res => this.setState({ 
                searchedBreed: this.state.selectedBreed,
                selectedId: this.state.selectedId
            }))
            .catch(err => console.log(err));
    }


    render () {
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
                        value={this.state.selectedIssue }
                        onChange={this.handleInputChange}
                    />
                    <datalist id="issues">
                        {this.state.listOfIssues.map(issue => (
                        <option value={issue} key={issue}/>
                        ))}
                    </datalist>
                <button 
                    id="btn" 
                    onClick={() => this.handleFormSubmit(this.state.issueId)}
                    type="submit" 
                    className="btn btn-dark btn-block mt-2"
                    >
                    Search
                </button>
             </form> 
        )
    }
}


export default SearchBar;
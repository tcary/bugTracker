import React, { Component } from "react";
import API from "../../utils/API";

class SearchBar extends Component {
    state = {
        listOfIssues: [],
    }   

    componentDidMount () {
        API.getIssues()
            // .then(res => console.log("in search", res.data))
            .then(res => this.setState({listOfIssues: res.data}))
            .catch(err => console.log(err))
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
                    />
                    <datalist id="issues">
                        {this.state.listOfIssues.map(issue => (
                        <option value={issue} key={issue._id}/>
                        ))}
                    </datalist>
               <button type="submit" className="btn btn-dark btn-block mt-2">
                 Search
                   </button>
             </form> 
        )
    }
}


export default SearchBar;
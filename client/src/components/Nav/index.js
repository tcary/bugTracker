import React from "react";
import "./style.scss";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA3G1EmSn4ohjntJkZb6Yy8RJjqbNPFJbJDUt13QdoqD9fNi7IA&s" width="30" height="30" className="d-inline-block align-top" alt="company logo image of a bug"></img> */}
        {/* React Debugger */}
        <h1>React Debugger</h1>
      </a>
      {/* <div className="container"> */}

      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Nav;

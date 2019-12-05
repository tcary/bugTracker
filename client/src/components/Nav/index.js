import React from "react";
import { Button } from "reactstrap";
import "./style.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA3G1EmSn4ohjntJkZb6Yy8RJjqbNPFJbJDUt13QdoqD9fNi7IA&s" width="30" height="30" className="d-inline-block align-top" alt="company logo image of a bug"></img> */}
        {/* React Debugger */}
        <h1>Bug Tracker </h1>
      </Link>

      <div className="bug-container bug-container--one">
        <div className="bug bug--one"></div>
      </div>

      <div className="bug-container bug-container--two">
        <div className="bug bug--two"></div>
      </div>

      <div className="bug-container bug-container--three">
        <div className="bug bug--three"></div>
      </div>

      <div className="bug-container bug-container--four">
        <div className="bug bug--four"></div>
      </div>
      <div className="login">
        <Button className="button" outline color="secondary">
          Log In
        </Button>{" "}
        <Button className="button" outline color="secondary">
          Sign Up
        </Button>{" "}
        <img
          className="search"
          alt="Picture of magnifying glass"
          src="./img/magnifying-glass.png"
          style={{
            opacity: window.location.pathname === "/" ? 0 : 1,
            // float: "right",
            width: "30px",
            height: "30px",
            color: "link",
            zIndex: "3",
            marginLeft: "50%"
          }}
        ></img>
      </div>
    </nav>
  );
}

export default Nav;

import React from "react";
import styled from "styled-components";
import "./HomePage.css";
import { Redirect } from "react-router-dom";

const picPosition = styled.section`
  #mainLogo {
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
// making it a class type component in order to use Redirect component
class HomePage extends React.Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/projects" />;
    }
  };

  render() {
    return (
      <picPosition>
        <div className="logoContainer">
          {this.renderRedirect()}
          <img
            onClick={this.setRedirect}
            id="mainLogo"
            alt="logo"
            src="./img/logo2.jpg"
          />
        </div>
      </picPosition>
    );
  }
}

export default HomePage;

import React from "react";
import styled from "styled-components";
import "./HomePage.css";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

const picPosition = styled.section`
  #mainLogo {
    height: 300px;
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
          <motion.div
            className="logobox"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 150
            }}
          >
            <img
              onClick={this.setRedirect}
              id="mainLogo"
              alt="logo"
              src="./img/logo2.jpg"
            />
          </motion.div>
        </div>
      </picPosition>
    );
  }
}

export default HomePage;

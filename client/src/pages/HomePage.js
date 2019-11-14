import React from "react";
import styled from "styled-components";

import { Redirect } from "react-router-dom";

const PicPosition = styled.section`
body {
  background: rgb(243, 242, 240);
}
.logoContainer {
  display: flex;
  justify-content: center;

}
#mainLogo {
  height: 20rem; 
  border-radius: 5%;
  margin: 5rem 0;
  padding: 20px;
  box-shadow: 
       inset 0 -3em 3em rgba(0,0,0,0.1), 
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
}

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
      <PicPosition>
        <div className="logoContainer">
          {this.renderRedirect()}
          <img
            onClick={this.setRedirect}
            id="mainLogo"
            alt="logo"
            src="./img/logo2.jpg"
          />
        </div>
      </PicPosition>
    );
  }
}

export default HomePage;

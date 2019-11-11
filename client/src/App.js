import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

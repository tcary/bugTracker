import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EditDetail from "./pages/EditDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route exact path="/projects/issues" component={Detail} />
          <Route exact path="/projects/issues/:id" component={Detail} />
          <Route exact path="/issues/details/:id" component={EditDetail} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

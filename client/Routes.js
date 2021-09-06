import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import HoursLocation from "./components/HoursLocation";
import Menu from "./components/Menu";
import Drafts from "./components/Drafts";
import Wines from "./components/Wines";

/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData();
  // }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/HoursLocation" component={HoursLocation} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Drafts" component={Drafts} />
          <Route path="/Wines" component={Wines} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;

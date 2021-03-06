import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewBusinesContainer from './business/new_business_container';
import EditBusinessContainer from './business/edit_business_container';
import ShowBusinessContainer from './business/business_show_container'
import BusinessIndexContainer from './business/business_index_container'
import { AuthRoute,ProtectedRoute } from "../utils/route_utils";

// Route ; regular
// AuthRoute ; only if 'not logged in', else redirraect to '/'
// Protected ; only if 'logged in', else redirect to '/signup'

export default () => (
    <div>
      <NavBarContainer/>
      <h4></h4>
      <Switch>
        <ProtectedRoute path="/edit" component={EditBusinessContainer} />
        <ProtectedRoute path="/create" component={NewBusinesContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/" component={BusinessIndexContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
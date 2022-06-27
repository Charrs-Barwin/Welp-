import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute,ProtectedRoute } from "../utils/route_utils";

// Route ; regular
// AuthRoute ; only if 'not logged in', else redirraect to '/'
// Protected ; only if 'logged in', else redirect to '/signup'

export default () => (
    <div>
      <NavBarContainer/>
      <h4>frontend/components/app.jsx</h4>
      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );

  // <Route exact path="/" component={NavBarContainer} />

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute,ProtectedRoute } from "../utils/route_utils";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewBusinesContainer from './business/new_business_container';
import EditBusinessContainer from './business/edit_business_container';
import ShowBusinessContainer from './business/business_show_container'
import BusinessIndexContainer from './business/business_index_container'
import NewReviewContainer from './review/new_review_container';
import EditReviewContainer from './review/edit_review_container';
import ShowReviewContainer from './review/review_show_container'
import ReviewIndexContainer from './review/review_index_container'

// Route ; regular
// AuthRoute ; only if 'not logged in', else redirraect to '/'
// Protected ; only if 'logged in', else redirect to '/signup'

export default () => (
    <div>
      <NavBarContainer/>
      <h4></h4>
      <Switch>
        <Route path="/businesses/:id/reviews" component={ReviewIndexContainer} />
        <ProtectedRoute path="/businesses/:id/review" component={NewReviewContainer} />
        <ProtectedRoute path="/reviews/:id/edit" component={EditReviewContainer} />
        <Route path="/reviews/:id" component={ShowReviewContainer} />
        <ProtectedRoute path="/businesses/:id/edit" component={EditBusinessContainer} />
        <Route path="/businesses/:id" component={ShowBusinessContainer} />
        <ProtectedRoute path="/create" component={NewBusinesContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/" component={BusinessIndexContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
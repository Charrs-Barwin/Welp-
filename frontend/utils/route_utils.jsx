import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from 'react-router-dom';
// import { Route } from 'react-router-dom';

const mapSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component, exact }) => (
    <Route path={path} exact={exact}
    render={props => (loggedIn ? <Redirect to="/"/> : <Component {...props}/> )}
    />
);

const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route path={path} exact={exact}
    render={props => (loggedIn ? <Component {...props}/> : <Redirect to="/signup"/> )}
    />
);

export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP)(Protected));
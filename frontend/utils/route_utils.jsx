import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

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
    render={props => (loggedIn ? <Component {...props}/> : <Redirect to={{pathname:'/login',state:{previous:this.props.location.pathname}}}/> )}
    />
);

export const AuthRoute = connect(mapSTP)(Auth);
export const ProtectedRoute = connect(mapSTP)(Protected);
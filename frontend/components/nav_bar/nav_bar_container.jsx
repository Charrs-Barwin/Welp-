import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';

const mapSTP = state => ({
  currentUser: state.session.currentUser,
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapSTP,mapDTP)(NavBar));

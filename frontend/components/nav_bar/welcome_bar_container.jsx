import React from 'react';
import {connect} from 'react-redux';
import WelcomeBar from './welcome_bar';

const mapSTP = (state) => ({
  user: state.session.currentUser
});

export default connect(mapSTP)(WelcomeBar);
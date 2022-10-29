import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  
  render() {
    return (
      <footer className='footer' >
        <p>footer here</p>
      </footer>
    );
  }

};

export default withRouter(Footer);
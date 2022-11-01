import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer' >
          <div>
              <div>
                <h4>About</h4>
                <br/>
                <Link className='footer-link' to='/'>Link one</Link>
                <br/>
                <Link className='footer-link' to='/'>Link two</Link>
              </div>

              <div>
                <h4>Discover</h4>
                <br/>
                <Link className='footer-link' to='/'>Link three</Link>
                <br/>
                <Link className='footer-link' to='/'>Link four</Link>
              </div>
          </div>
          <p>Not a real website.</p>
      </footer>
    );
  }

};

export default withRouter(Footer);
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
    .then(()=>this.props.history.push('/login'))
  }

  render() {
    let { currentUser } = this.props;
    
    const display = currentUser ? (
      <div>
        <p>Hello, {currentUser.name}</p>
        <button onClick={this.handleLogout} > Logout! </button>
        <br/>
        <Link className="btn" to="/create">Add New Business</Link>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup"><button>Sign Up</button></Link>
        <br/>
        <Link className="btn" to="/login"><button>Log In</button></Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <Link to='/'>
        <h1 className="logo">Welp</h1>
        </Link>
        <div>
          {display}
        </div>
      </header>
    );
  }

};

export default NavBar;
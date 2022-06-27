import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

// () => logout().then(()=>{props.history.push('/login')})
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
        < Link to="/" onClick={this.props.logout}> Logout! </Link>
      </div>
    ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <br/>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <h1 className="logo">Welp (from nav_bar.jsx)</h1>
        <div>
          {display}
        </div>
      </header>
    );
  }

};

export default NavBar;
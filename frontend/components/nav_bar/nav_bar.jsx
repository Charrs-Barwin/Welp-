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
    .then(()=>this.props.history.push({pathname:'/login',state:{previous:this.props.location.pathname}}))
  }

  render() {
    let { currentUser } = this.props;
    
    const display = currentUser ? (
      <div>
        <p>Hello, {currentUser.name}</p>
        <button onClick={this.handleLogout} > Logout! </button>
        <br/>
        <Link to="/create">Add New Business</Link>
      </div>
    ) : (
      <div>
        <Link to={{pathname:'/signup',state:{previous:this.props.location.pathname}}}><button>Sign Up</button></Link>
        <br/>
        <Link to={{pathname:'/login',state:{previous:this.props.location.pathname}}}><button>Log In</button></Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <Link to='/'>
        <h1 className="logo">Welp</h1>
        </Link>
        <h6>{this.props.location.pathname}</h6>
        <div>
          {display}
        </div>
      </header>
    );
  }

};

export default NavBar;
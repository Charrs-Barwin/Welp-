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
        <Link className="btn" to="/" onClick={this.props.logout}><button> Logout! </button></Link>
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
        <h1 className="logo">Welp</h1>
        <div>
          {display}
        </div>
        <Link className="btn" to="/index">index link</Link>
      </header>
    );
  }

};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {searchInput:''}

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleInput() {
    return (e) => this.setState({searchInput: e.currentTarget.value})
  }

  handleSearch() {
    this.props.history.push('/search/'+this.state.searchInput)
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
        {this.props.location.pathname != '/profile' ? (<div><Link to="/profile">Profile</Link><br/></div>) : null}
        <button onClick={this.handleLogout} > Logout! </button>
        <br/>
        <Link to="/create"> <button>Add Business</button></Link>
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
        {display}
        <form>
          <input type="text" value={this.state.searchInput} placeholder='search' onChange={this.handleInput()} />
          <button type='submit' onClick={this.handleSearch} >search</button>
        </form>
      </header>
    );
  }

};

export default NavBar;
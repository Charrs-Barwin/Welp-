import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/Yelp-Logo.png"
// import grill from "../../../app/assets/images/grill.jpg"

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
      <div className='navbar-User'>
        <Link to={''} onClick={this.handleLogout} ><button id='logout-button' > Logout! </button></Link>
        {this.props.location.pathname != '/profile' ? <div><Link to="/profile"><button id='profile-button' > Hello, {currentUser.name} </button></Link></div> : null}
      </div>
    ) : (
      <div className='navbar-User'>
        {this.props.location.pathname != '/login' ? <Link to={{pathname:'/login',state:{previous:this.props.location.pathname}}}><button id='login-button' >Log In</button></Link> : null}
        {this.props.location.pathname != '/signup' ? <Link to={{pathname:'/signup',state:{previous:this.props.location.pathname}}}><button id='signup-button' >Sign Up</button> </Link> : null}
        {/* {this.props.location.pathname != '/signup' ? <button className='signup-button' >Sign Up</button> : null} */}
      </div>
    );
    
    return (
      <header className="nav-bar">
        <Link className="logo" to='/'>
          <h1>Welp</h1>
          <img src={logo} height='28' width='58' alt="no logo :(" />
        </Link>
        <form className='search-bar'>
          <input type="text" value={this.state.searchInput} placeholder='search' onChange={this.handleInput()} />
          <button type='submit' onClick={this.handleSearch} >⌕</button>
        </form>
        <Link to="/create"> <button className='create-button' >Add Business</button></Link>
        {display}
        {/* <h6>{this.props.location.pathname}</h6> */}
      </header>
    );
  }

};

export default NavBar;
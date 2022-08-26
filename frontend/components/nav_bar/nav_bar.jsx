import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput:'',
      searchText:'',
      search:''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleInput() {
    return (e) => this.setState({searchInput: e.currentTarget.value})
  }

  handleSearch() {
    this.setState({
      searchText: this.state.searchInput,
      search: new RegExp(this.state.searchInput,'i')
    })
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
        <Link to="/create">Add New Business</Link>
      </div>
    ) : (
      <div>
        <Link to="/signup"><button>Sign Up</button></Link>
        <br/>
        <Link to="/login"><button>Log In</button></Link>
      </div>
    );
    
    return (
      <header className="nav-bar">
        <Link to='/'>
        <h1 className="logo">Welp</h1>
        </Link>
        <h6>{this.props.location.pathname}</h6>
        <Link to="/businesses">Index</Link>
        <form>
          <input type="text" value={this.state.searchInput} placeholder='search' onChange={this.handleInput()} />
          <button type='submit' onClick={this.handleSearch} >search</button>
        </form>
        <div>
          {display}
        </div>
      </header>
    );
  }

};

export default NavBar;
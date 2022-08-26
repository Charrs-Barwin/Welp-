import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        searchInput:'',
        searchText:'',
        search:''
      }
      this.handleSearch = this.handleSearch.bind(this)
  }
  
  componentDidMount() {
    this.props.getBusinesses();
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

  activeSearchToggle() {
    return (e) => this.setState({activeSearch: e.currentTarget.value === 'true' })
  }

  render() {
    let {businesses} = this.props
    return (
      <div>
      <form>
        <input type="text" value={this.state.searchInput} placeholder='search' onChange={this.handleInput()} />
        <button type='submit' onClick={this.handleSearch} >search</button>
      </form>
      
      <ul>
        {
          businesses.filter(bsn => {
            const bsnParams = [bsn.location,bsn.phone||''.toString(),bsn.website,bsn.owner.name]
            return bsn.name.match(this.state.search) || bsnParams.some(param=> param == this.state.searchText)
          }).sort((a,b)=> b.avgRating - a.avgRating)
          .map(bsn => (
            <div key={bsn.id}>
              <Link to={`/businesses/${bsn.id}`} >{bsn.name}</Link>
              <br/>
            </div>
          ))
        }
      </ul>
      </div>
    );
  }
}

export default BusinessIndex;
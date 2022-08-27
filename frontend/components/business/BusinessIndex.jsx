import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        searchInput:''
      }
      // this.handleSearch = this.handleSearch.bind(this)
  }
  
  componentDidMount() {
    this.setState(this.props.location.state||this.state)
    this.props.getBusinesses()
    // .then(this.setState(this.props.location.state))
  }

  componentDidUpdate(prevProps) {
    // debugger
    let prevSearch = (prevProps.location.state||this.state).searchInput;
    let newSearch = (this.props.location.state||this.state).searchInput;
    if (prevSearch !== newSearch) {
      this.setState(this.props.location.state||this.state)
    }
  }

  // handleInput() {
  //   return (e) => this.setState({searchInput: e.currentTarget.value})
  // }

  // handleSearch() {
  //   this.setState({
  //     searchText: this.state.searchInput,
  //     search: new RegExp(this.state.searchInput,'i')
  //   })
  // }

  render() {
    let {businesses} = this.props
    return (
      <ul>
        {
          businesses.filter(bsn => {
            const searchExpression = new RegExp(this.state.searchInput,'i')
            const bsnParams = [bsn.location,bsn.phone||''.toString(),bsn.website,bsn.owner.name]
            return bsn.name.match(searchExpression) || bsnParams.some(param=> param == this.state.searchInput)
          }).sort((a,b)=> b.avgRating - a.avgRating)
          .map(bsn => (
            <div key={bsn.id}>
              <Link to={`/businesses/${bsn.id}`} >{bsn.name}</Link>
              <br/>
            </div>
          ))
        }
      </ul>
    );
  }
}

export default BusinessIndex;
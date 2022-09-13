import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
  constructor(props){
      super(props)
      this.state = {searchInput:''}
  }
  
  componentDidMount() {
    this.setState({searchInput: this.props.match.params.id||''})
    this.props.getBusinesses();
  }

  componentDidUpdate(prevProps) {
    let prevSearch = prevProps.match.params.id;
    let newSearch = this.props.match.params.id;
    if (prevSearch !== newSearch) {
      this.setState({searchInput: this.props.match.params.id})
    }
  }

  render() {
    let {businesses} = this.props
    let results = businesses.filter(bsn => {
      const searchExpression = new RegExp(this.state.searchInput,'i')
      const bsnParams = [bsn.location,bsn.phone||''.toString(),bsn.website,bsn.owner.name]
      return bsn.name.match(searchExpression) || bsnParams.some(param=> param == this.state.searchInput)
    })
    if (!results.length) return <h6>No search results</h6>
    return (
      <ul>
        {
          results.sort((a,b)=> b.avgRating - a.avgRating)
          .map(bsn => (
            <div key={bsn.id}>
              <Link to={`/businesses/${bsn.id}`} >{bsn.name}</Link>
              <h6> {bsn.avgRating}</h6>
            </div>
          ))
        }
      </ul>
    );
  }
}

export default BusinessIndex;
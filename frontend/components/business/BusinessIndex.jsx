import React from 'react';
import { Link } from 'react-router-dom';
import star0 from "../../../app/assets/images/0star.jpg"
import star1 from "../../../app/assets/images/1star.jpg"
import star2 from "../../../app/assets/images/2star.jpg"
import star3 from "../../../app/assets/images/3star.jpg"
import star4 from "../../../app/assets/images/4star.jpg"
import star5 from "../../../app/assets/images/5star.jpg"

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
    const stars = [star0,star1,star2,star3,star4,star5]
    return (
      <div>
      {/* <h2 className='header-text' >Search results</h2> */}
        <ul className='search-businessItems'>
          {
            results.sort((a,b)=> b.avgRating - a.avgRating)
            .map(bsn => (
              <Link className='indexItem-link' to={`/businesses/${bsn.id}`} >
                <div className='search-businessItem-div' key={bsn.id}>
                  {bsn.photoUrl ? 
                    <img src={bsn.photoUrl} height='192' width='192' />
                  : null}
                  <div className='businessItem-right' >
                    <h4>{bsn.name}</h4>
                    <div className='rating-info'>
                      <img className='star-img' src={stars[Math.floor(bsn.avgRating)]} height='28' width='115' alt="No star img :(" />
                      <h6> {bsn.avgRating}</h6>
                      <h6> ({bsn.reviews.length} review{bsn.reviews.length != 1 ? 's' : ''})</h6>
                    </div>
                    {bsn.reviews.length ? <p>"{bsn.reviews.sort((a,b)=> b.rating - a.rating)[0].body}"</p> : null}
                  </div>
                </div>
              </Link>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default BusinessIndex;
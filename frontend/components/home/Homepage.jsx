import React from 'react';
import { Link } from 'react-router-dom';
// import grill from "../../../app/assets/images/grill.jpg"
import star0 from "../../../app/assets/images/0star.jpg"
import star1 from "../../../app/assets/images/1star.jpg"
import star2 from "../../../app/assets/images/2star.jpg"
import star3 from "../../../app/assets/images/3star.jpg"
import star4 from "../../../app/assets/images/4star.jpg"
import star5 from "../../../app/assets/images/5star.jpg"

class Homepage extends React.Component {
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
      <div className='homepage'>
        {/* <img className='splash-img' src={grill} alt="No img :(" /> */}
        <div className='homepage-index'>
          <h2 className='header-text' >Recently trending</h2>
          <ul className='homepage-businessItems'>
            {
              results.sort((a,b)=> b.avgRating - a.avgRating)
              .map(bsn => (
                <div key={bsn.id}>
                  {bsn.photoUrl ? 
                    <Link to={`/businesses/${bsn.id}`} > 
                      <img src={bsn.photoUrl} height='128' width='128' />
                      <br/>
                    </Link> 
                    : null}
                  <Link to={`/businesses/${bsn.id}`} >{bsn.name}</Link>
                  <img className='star-img' src={stars[Math.floor(bsn.avgRating)]} height='22' width='90' alt="No star img :(" />
                  <h6> {bsn.avgRating}</h6>
                  <h6> ({bsn.reviews.length} review{bsn.reviews.length != 1 ? 's' : ''})</h6>
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;
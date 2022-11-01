import React from 'react';
import { Link } from 'react-router-dom';
import star0 from "../../../app/assets/images/0star.jpg"
import star1 from "../../../app/assets/images/1star.jpg"
import star2 from "../../../app/assets/images/2star.jpg"
import star3 from "../../../app/assets/images/3star.jpg"
import star4 from "../../../app/assets/images/4star.jpg"
import star5 from "../../../app/assets/images/5star.jpg"

class UserShow extends React.Component {

    componentDidMount() {
        // this.props.getUser(this.props.currentUser.id);
        this.props.getBusinesses()
    }

    render(){
        if (!this.props.currentUser) return null;
        if (!this.props.businesses) return null;
        const {currentUser,businesses} = this.props;
        const stars = [star0,star1,star2,star3,star4,star5]
        // debugger
        return(
            <div className='profile-page'>
                {/* <h3 className='header-text'>profile page</h3> */}
                <br/>
                <h2>{currentUser.name}</h2>
                <br/>
                <h5>email</h5>
                <li>{currentUser.email}</li>
                <br/>
                <br/>
                <h4 className='profile-header' >Your Businesses</h4>
                <br/>
                <ul>
                {
                currentUser.businesses.map(bsn => ( businesses[bsn.id] ? 
                    <div key={bsn.id}>
                        <Link to={'/businesses/'+ bsn.id} className='indexItem-link' >
                            {/* <img src={bsn.photoUrl} height='128' width='128' /> */}
                            <img src={businesses[bsn.id] ? businesses[bsn.id].photoUrl : ''} alt="no image :(" height='128' width='128' />
                            <br/>
                            <h3>{bsn.name}</h3>
                            <div className='rating-info'>
                                <img className='star-img' src={stars[Math.floor(businesses[bsn.id].avgRating)]} height='28' width='115' alt="No star img :(" />
                                <h6> {businesses[bsn.id].avgRating}</h6>
                                <h6> ({businesses[bsn.id].reviews.length} review{businesses[bsn.id].reviews.length != 1 ? 's' : ''})</h6>
                            </div>
                        </Link>
                        
                        <br/>
                        <h5>Location</h5>
                        <li>{bsn.location}</li>
                        <br/>
                        <h5>Telephone</h5>
                        <li>{bsn.phone}</li>
                        <br/>
                        <h5>Business website</h5>
                        <li>{bsn.website}</li>
                        <br/>
                        
                    </div> : null
                ))
                }
                </ul>
                { !currentUser.businesses.length ? <h6>You have not yet created any businesses.</h6> : null }
                <br/>
                <br/>
                
                <h4 className='profile-header' >Businesses you've reviewed</h4>
                <ul>
                {
                currentUser.reviews.map(review => (
                    businesses[review.business_id] ? <div key={review.id}>
                        <Link to={'/businesses/'+ review.business_id} className='indexItem-link' >
                            <img src={businesses[review.business_id].photoUrl} height='128' width='128' />
                            <br/>
                            <h3>{businesses[review.business_id].name}</h3>
                        </Link>
                        {/* <h5>Average rating: {businesses[review.business_id].avgRating} ({businesses[review.business_id].reviews.length} review{businesses[review.business_id].reviews.length != 1 ? 's' : ''})</h5> */}
                        <br/>
                        <img className='star-img' src={stars[Math.floor(review.rating)]} height='24' width='100' alt="No star img :(" />
                        <p>"{review.body}"</p>
                    </div>: null
                ))
                }
                </ul>
                <br/>
                { !currentUser.reviews.length ? <h6>You have not yet reviewed any businesses.</h6> : null }
            </div>
        )
    }
}

export default UserShow;
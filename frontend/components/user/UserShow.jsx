import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

    componentDidMount() {
        // this.props.getUser(this.props.currentUser.id);
        this.props.getBusinesses()
    }

    render(){
        if (!this.props.currentUser) return null;
        const {currentUser,businesses} = this.props;
        // debugger
        return(
            <div>
                <h3>profile page</h3>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <br/>
                <h4>Your Businesses</h4>
                <ul>
                {
                currentUser.businesses.map(business => (
                    <div key={business.id}>
                    <Link to={'/businesses/'+ business.id}>
                        {/* <img src={business.photoUrl} height='128' width='128' /> */}
                        <img src={businesses[business.id] ? businesses[business.id].photoUrl : ''} alt="no image :(" height='128' width='128' />
                        {business.name}
                    </Link>
                    {businesses[business.id] ? 
                        <h5>rating: {businesses[business.id].avgRating} ({businesses[business.id].reviews.length} review {businesses[business.id].reviews.length != 1 ? 's' : ''})</h5>
                    : null}
                    <li>{business.location}</li>
                    <li>{business.phone}</li>
                    <li>{business.website}</li>
                    <br/>
                    </div>
                ))
                }
                </ul>
                <br/>
                
                <h4>Businesses you've reviewed</h4>
                <ul>
                {
                currentUser.reviews.map(review => (
                    <div key={review.id}>
                    {businesses[review.business_id] ? <div>
                        <Link to={'/businesses/'+ review.business_id}>
                            <img src={businesses[review.business_id].photoUrl} height='128' width='128' />
                            {businesses[review.business_id].name}
                        </Link>
                        <h5>Average rating: {businesses[review.business_id].avgRating} ({businesses[review.business_id].reviews.length} review{businesses[review.business_id].reviews.length != 1 ? 's' : ''})</h5>
                    </div>: null}
                    <h3>Rated: {review.rating}</h3>
                    <h5>Review: {review.body}</h5>
                    </div>
                ))
                }
                </ul>
            </div>
        )
    }
}

export default UserShow;
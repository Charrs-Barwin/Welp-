import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

    render(){
        if (!this.props.currentUser) return null;
        const {currentUser} = this.props;

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
                    <Link to={'/businesses/'+ business.id}>{business.name}</Link>
                    <h5>rating: {business.rating||business.avgRating||'N/A'}</h5>
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
                currentUser.reviewed_businesses.map(business => (
                    <div key={business.id}>
                    <Link to={'/businesses/'+ business.id}>{business.name}</Link>
                    <h5>Average rating: {business.rating||business.avgRating||'N/A'}</h5>
                    </div>
                ))
                }
                </ul>
                {/* <ul>
                {
                currentUser.reviews.map(review => (
                    <div key={review.id}>
                    <Link to={'/businesses/'+ review.business_id}>{review.business.name}</Link>
                    <h3>{review.rating}</h3>
                    <h5>{review.body}</h5>
                    </div>
                ))
                }
                </ul> */}
            </div>
        )
    }
}

export default UserShow;
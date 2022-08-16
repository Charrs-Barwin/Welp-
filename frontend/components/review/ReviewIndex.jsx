import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.getReview();
  }

  render() {
    return (
      <ul>
        {
          this.props.reviews.map(review => (
            <div key={review.id}>
              <Link to={`/businesses/${review.id}`} >{review.name}</Link>
              <br/>
            </div>
          ))
        }
      </ul>
    );
  }
}

export default ReviewIndex;
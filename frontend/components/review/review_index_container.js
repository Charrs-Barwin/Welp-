import { connect } from 'react-redux';
import ReviewIndex from './ReviewIndex'
import { getReviews, getReview } from '../../actions/review'

const mapSTP = state => ({
  reviews: Object.values(state.entities.reviews)
});

const mapDTP = dispatch => ({
  getReviews: () => dispatch(getReviews()),
  // getReview: reviewId => dispatch(getReview(reviewId))
});

export default connect(mapSTP, mapDTP)(ReviewIndex);
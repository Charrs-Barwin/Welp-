import { connect } from 'react-redux';
import {getBusiness,eraseBusiness} from '../../actions/business'
import { getReviews, addReview, editReview, eraseReview} from '../../actions/review'
import BusinessShow from './BusinessShow';

const mapSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    reviews: Object.values(state.entities.reviews)
});

const mapDTP = (dispatch, ownProps) => ({
    getBusiness: () => dispatch(getBusiness(ownProps.match.params.id)),
    eraseBusiness: () => dispatch(eraseBusiness(ownProps.match.params.id)),

    getReviews: () => dispatch(getReviews()),
    addReview: review => dispatch(addReview(review)),
    editReview: review => dispatch(editReview(review)),
    eraseReview: review => dispatch(eraseReview(review.id))
});

export default connect(mapSTP, mapDTP)(BusinessShow);
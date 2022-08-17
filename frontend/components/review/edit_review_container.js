import {
    // getReviews,
    getReview,
    // addReview,
    editReview,
    // eraseReview
} from '../../actions/review';
import {connect} from 'react-redux';
import ReviewForm from './ReviewForm';

const mapSTP = (state,ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.id],
    errors: Object.values(state.errors),
    formType: "Edit",
    currentUser: state.session.currentUser
})

const mapDTP = (dispatch,ownProps) => ({
    processForm: review => dispatch(editReview(review)),
    getBusiness: () => dispatch(getBusiness(ownProps.match.params.id))
})

export default connect(mapSTP,mapDTP)(ReviewForm);
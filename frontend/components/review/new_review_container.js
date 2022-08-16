import {
    // getReviews,
    // getReview,
    addReview,
    // editReview,
    // eraseReview
} from '../../actions/review';
import {connect} from 'react-redux';
import ReviewForm from './ReviewForm';

const mapSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: "Create"
})

const mapDTP = dispatch => ({
    processForm: review => dispatch(addReview(review))
})

export default connect(mapSTP,mapDTP)(ReviewForm);
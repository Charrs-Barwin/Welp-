import { connect } from 'react-redux';
import {getReview,eraseReview} from '../../actions/review'
import ReviewShow from './ReviewShow';

const mapSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    currentUser: state.session.currentUser.id
});

const mapDTP = (dispatch, ownProps) => ({
    getReview: () => dispatch(getReview(ownProps.match.params.id)),
    eraseReview: () => dispatch(eraseReview(ownProps.match.params.id))
});

export default connect(mapSTP, mapDTP)(ReviewShow);
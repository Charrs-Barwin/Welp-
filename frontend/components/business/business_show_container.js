import { connect } from 'react-redux';
import {getBusiness,eraseBusiness} from '../../actions/business'
import BusinessShow from './BusinessShow';

const mapSTP = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    currentUser: state.session.currentUser
});

const mapDTP = (dispatch, ownProps) => ({
    getBusiness: () => dispatch(getBusiness(ownProps.match.params.id)),
    eraseBusiness: () => dispatch(eraseBusiness(ownProps.match.params.id))
});

export default connect(mapSTP, mapDTP)(BusinessShow);
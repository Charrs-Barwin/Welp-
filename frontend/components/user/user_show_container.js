import { connect } from 'react-redux';
import {eraseBusiness,editBusiness} from '../../actions/business'
import UserShow from './UserShow';

const mapSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser
});

const mapDTP = (dispatch, ownProps) => ({
//     editBusiness: bsn => dispatch(editBusiness(bsn)),
//     eraseBusiness: () => dispatch(eraseBusiness(ownProps.match.params.id))
});

export default connect(mapSTP, mapDTP)(UserShow);
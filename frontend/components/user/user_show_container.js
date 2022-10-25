import { connect } from 'react-redux';
import {getBusinesses,eraseBusiness,editBusiness} from '../../actions/business'
import {getUser} from '../../actions/session'
import UserShow from './UserShow';

const mapSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    businesses: state.entities.businesses
});

const mapDTP = (dispatch, ownProps) => ({
    getUser: (id) => dispatch(getUser(id)),
    getBusinesses: () => dispatch(getBusinesses())
//     editBusiness: bsn => dispatch(editBusiness(bsn)),
//     eraseBusiness: () => dispatch(eraseBusiness(ownProps.match.params.id))
});

export default connect(mapSTP, mapDTP)(UserShow);
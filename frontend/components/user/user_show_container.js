import { connect } from 'react-redux';
import {getBusinesses,eraseBusiness,editBusiness} from '../../actions/business'
import UserShow from './UserShow';

const mapSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    businesses: Object.values(state.entities.businesses)
});

const mapDTP = (dispatch, ownProps) => ({
    getBusinesses: () => dispatch(getBusinesses())
//     editBusiness: bsn => dispatch(editBusiness(bsn)),
//     eraseBusiness: () => dispatch(eraseBusiness(ownProps.match.params.id))
});

export default connect(mapSTP, mapDTP)(UserShow);
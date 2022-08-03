import {
    // getBusinesses,
    getBusiness,
    // addBusiness,
    editBusiness,
    // eraseBusiness
} from '../../actions/business';
import {connect} from 'react-redux';
import BusinessForm from './BusinessForm';

const mapSTP = (state,ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
    errors: Object.values(state.errors),
    formType: "Edit",
    currentUser: state.session.currentUser.id,
})

const mapDTP = (dispatch,ownProps) => ({
    processForm: bsn => dispatch(editBusiness(bsn)),
    getBusiness: () => dispatch(getBusiness(ownProps.match.params.id))
})

export default connect(mapSTP,mapDTP)(BusinessForm);
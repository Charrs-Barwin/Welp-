import {
    // getBusinesses,
    // getBusiness,
    // addBusiness,
    editBusiness,
    // eraseBusiness
} from '../../actions/business';
import {connect} from 'react-redux';
import BusinessForm from './BusinessForm';

const mapSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: "Edit"
})

const mapDTP = dispatch => ({
    processForm: bsn => dispatch(editBusiness(bsn))
})

export default connect(mapSTP,mapDTP)(BusinessForm);
import {
    // getBusinesses,
    // getBusiness,
    addBusiness,
    // editBusiness,
    // eraseBusiness
} from '../../actions/business';
import {connect} from 'react-redux';
import BusinessForm from './BusinessForm';

const mapSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: "Create"
})

const mapDTP = dispatch => ({
    processForm: bsn => dispatch(addBusiness(bsn))
})

export default connect(mapSTP,mapDTP)(BusinessForm);
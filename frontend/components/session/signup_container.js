import {connect} from 'react-redux';
import { createNewUser } from '../../actions/session';
import SessionForm from './SessionForm';

const mapSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: "signup",
    otherForm: "login"
})

const mapDTP = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser))
})

export default connect(mapSTP,mapDTP)(SessionForm);
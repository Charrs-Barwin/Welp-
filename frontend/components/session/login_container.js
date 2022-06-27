import {connect} from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './SessionForm';

const mapSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: "login",
    otherForm: "signup"
})

const mapDTP = dispatch => ({
    processForm: formUser => dispatch(login(formUser))
})

export default connect(mapSTP,mapDTP)(SessionForm);
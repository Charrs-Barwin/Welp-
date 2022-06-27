import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ERRORS: // sets errors to the action's errors
            return {errors: action.errors}
        case RECEIVE_CURRENT_USER:   // clears the errors
            return {errors: []}
        default:
            return state;
    }
}
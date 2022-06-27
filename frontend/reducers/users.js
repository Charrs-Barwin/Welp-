import {
    RECEIVE_CURRENT_USER
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state)
    let ns = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(ns,{[action.user.id]:action.user})
        default:
            return state;
    }
}
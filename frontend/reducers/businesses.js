import {
    RECEIVE_ALL_BUSINESSES,
    RECEIVE_BUSINESS,
    REMOVE_BUSINESS
} from '../actions/business'

export default (state={},action) => {
    Object.freeze(state);
    let ns = Object.assign({},state)
    switch (action.key) {
        case RECEIVE_ALL_BUSINESSES:
            return Object.assign(ns,action.businesses)
            case RECEIVE_BUSINESS:
            return Object.assign(ns,{ [action.bsn.id]: action.bsn })
        case REMOVE_BUSINESS:
            delete ns[action.bsnId]
            return ns;            
        default:
            return state;
    }
}
import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review'

export default (state={},action) => {
    Object.freeze(state);
    let ns = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return Object.assign(ns,action.reviews)
        case RECEIVE_REVIEW:
            return Object.assign(ns,{ [action.review.id]: action.review })
        case REMOVE_REVIEW:
            delete ns[action.reviewId]
            return ns;            
        default:
            return state;
    }
}
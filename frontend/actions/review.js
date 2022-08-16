import {
    fetchReview,
    fetchReviews,
    createReview,
    updateReview,
    deleteReview
} from '../utils/review';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const getReviews = () => dispatch => fetchReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)))

export const getReview = reviewId => dispatch => fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))

export const addReview = review => dispatch => createReview(review)
    .then(_review => dispatch(receiveReview(_review)))

export const editReview = review => dispatch => updateReview(review)
    .then(_review => dispatch(receiveReview(_review)))

export const eraseReview = reviewId => dispatch => deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))

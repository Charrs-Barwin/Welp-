import {
    fetchBusiness,
    fetchBusinesses,
    createBusiness,
    updateBusiness,
    deleteBusiness
} from '../utils/business';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_POSTS';
export const RECEIVE_BUSINESS = 'RECEIVE_POST';
export const REMOVE_BUSINESS = 'REMOVE_POST';

const receiveAllBusinesses = businesses => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
});

const receiveBusiness = bsn => ({
  type: RECEIVE_BUSINESS,
  bsn
});

const removeBusiness = bsnId => ({
  type: REMOVE_BUSINESS,
  bsnId
});

export const getBusinesses = () => dispatch => fetchBusinesses()
    .then(businesses => dispatch(receiveAllBusinesses(businesses)))

export const getBusiness = bsnId => dispatch => fetchBusiness(bsnId)
    .then(bsn => dispatch(receiveBusiness(bsn)))

export const addBusiness = bsn => dispatch => createBusiness(bsn)
    .then(bsn => dispatch(receiveBusiness(bsn)))

export const editBusiness = bsn => dispatch => updateBusiness(bsn)
    .then(bsn => dispatch(receiveBusiness(bsn)))

export const eraseBusiness = bsnId => dispatch => deleteBusiness(bsnId)
    .then(() => dispatch(removeBusiness(bsnId)))

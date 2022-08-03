import {
    fetchBusiness,
    fetchBusinesses,
    createBusiness,
    updateBusiness,
    deleteBusiness
} from '../utils/business';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const REMOVE_BUSINESS = 'REMOVE_BUSINESS';

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
    .then(_bsn => dispatch(receiveBusiness(_bsn)))

export const editBusiness = bsn => dispatch => updateBusiness(bsn)
    .then(_bsn => dispatch(receiveBusiness(_bsn)))

export const eraseBusiness = bsnId => dispatch => deleteBusiness(bsnId)
    .then(() => dispatch(removeBusiness(bsnId)))

import {
    postUser,
    deleteSession,
    postSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const createNewUser = formUser => dispatch => postUser(formUser)
.then(user => dispatch(receiveCurrentUser(user)))

export const login = formUser => dispatch => postSession(formUser)
.then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => deleteSession()
.then(() => dispatch(logoutCurrentUser()))

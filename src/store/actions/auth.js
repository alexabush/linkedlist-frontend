import { apiCall, setTokenHeader } from '../../services/api';
import { addError, removeError } from './errors';
import { SET_CURRENT_USER } from '../actionTypes';

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}
/**
 * Sign up or Sign in a user
 * @param {string} type signin or signup user
 * @param {object} userData JSON object from form
 */

//thunk time
export function authUser(type, data) {
  console.log('in authUser');
  return async dispatch => {
    try {
      console.log('about to make post request to users');
      let newUser = await apiCall('post', `/users`, { data });
      console.log('about to make post request to user-auth');
      let authData = await apiCall('post', `/user-auth`, { data });
      /* This lets us just do all this once*/
      // once we have logged in, set a token in localStorage
      console.log('about to set jawt in local storage');
      localStorage.setItem('jwtToken', authData.data.token);
      // set a header of Authorization
      console.log('about to call setAuthorizationToken');
      setAuthorizationToken(authData.data.token);
      //changes isAuthenticated to true
      // set a currentUser in Redux
      console.log('about to dispatch using setCurrentUser');
      dispatch(setCurrentUser({ username: newUser.username }));
      // remove any error messages
      console.log('about to dispatch removeError');
      dispatch(removeError());
      return;
    } catch (err) {
      console.log('in auth user error block');
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function loginUser(type, data) {
  console.log('in loginUser');
  return async dispatch => {
    try {
      let authData = await apiCall('post', `/user-auth`, { data });
      // once we have logged in, set a token in localStorage
      localStorage.setItem('jwtToken', authData.data.token);
      /* set a header of Authorization
      from api:
      if we have a token, add a Authorization header
      if we don't have a token, delete Authorization header
      */
      setAuthorizationToken(authData.data.token);
      // set a currentUser in Redux
      // dispatch(setCurrentUser({ username: data.username }));
      dispatch(setCurrentUser({ username: data.username }));
      // remove any error messages
      dispatch(removeError());
      return;
    } catch (err) {
      dispatch(addError(err.message));
      return Promise.reject(err); // indicate the API call failed
    }
  };
}

export function logout() {
  console.log('in logout');
  // we need to make this a thunk so that we can dispatch setCurrentUser
  return dispatch => {
    // clear the token from localStorage
    localStorage.clear();
    // remove the Authorization header
    setAuthorizationToken(false);
    // set the currentUser to be {} in Redux
    dispatch(setCurrentUser({}));
  };
}

export function setCurrentUser(user) {
  console.log('in setCurrentUser');
  return {
    type: SET_CURRENT_USER,
    user
  };
}

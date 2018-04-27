import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';

/*
combine reducers combines are reducers...yeah
*/
const rootReducer = combineReducers({
  currentUser,
  errors
});

export default rootReducer;

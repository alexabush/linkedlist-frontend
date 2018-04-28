import { combineReducers } from 'redux';
import currentUser from './currentUser';
import currentJobs from './currentJobs';
import errors from './errors';

/*
combine reducers combines our reducers and...yeah
*/
const rootReducer = combineReducers({
  currentUser,
  currentJobs,
  errors
});

export default rootReducer;

import { SET_CURRENT_JOBS } from '../actionTypes';

export function setCurrentJob(job) {
  console.log('in setCurrentJob');
  return {
    type: SET_CURRENT_JOBS,
    job
  };
}

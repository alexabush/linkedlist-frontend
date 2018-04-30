import { SET_CURRENT_JOBS } from '../actionTypes';

export function setCurrentJobs(jobs) {
  console.log('in setCurrentJobs');
  return {
    type: SET_CURRENT_JOBS,
    jobs
  };
}

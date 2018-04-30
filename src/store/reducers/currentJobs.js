import { SET_CURRENT_JOBS } from '../actionTypes';

const DEFAULT_STATE = {
  jobs: []
};

export default (state = DEFAULT_STATE, action) => {
  console.log('in currentJobs reducer');
  switch (action.type) {
    case SET_CURRENT_JOBS:
      // return [...action.jobs];
      return action.jobs.map(job => {
        job.company = job.company.handle;
        return job;
      });
    default:
      return state;
  }
};

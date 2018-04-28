import { SET_CURRENT_JOBS } from '../actionTypes';

const DEFAULT_STATE = {
  jobs: []
};

export default (state = DEFAULT_STATE, action) => {
  console.log('in currentJobs reducer');
  // debugger;
  switch (action.type) {
    case SET_CURRENT_JOBS:
      var updatedJobs = [...state.jobs].map(
        job =>
          (job.company.handle = action.company.handle
            ? {
                ...job,
                equity: action.equity,
                salary: action.salary,
                title: action.title,
                company: {
                  ...job.company,
                  _id: action.company.id,
                  handle: action.company.handle
                }
              }
            : {
                job
              })
      );
      return { jobs: updatedJobs };
    default:
      return state;
  }
};

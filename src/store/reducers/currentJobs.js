import { SET_CURRENT_JOBS } from '../actionTypes';

const DEFAULT_STATE = {
  jobs: []
};

export default (state = DEFAULT_STATE, action) => {
  console.log('in currentJobs reducer');
  // debugger;
  switch (action.type) {
    case SET_CURRENT_JOBS:
      //what do we actually want to map over here?
      //current the job object on the current state or the incoming job object?
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
    // return { jobs: [...state.jobs, ...action.jobs] };
    default:
      return state;
  }
};

import React, { Component } from 'react';
import Job from '../molecules/Job';

class JobsList extends Component {
  state = {};
  render() {
    console.log('this.props.jobs', this.props.jobs);
    debugger;
    const joblis = this.props.jobs.map((job, index) => (
      <li key={index}>
        Job!
        <Job job={job} />
      </li>
    ));
    return (
      <div>
        <h1>Jobs</h1>
        <ul>{joblis}</ul>
      </div>
    );
  }
}

export default JobsList;

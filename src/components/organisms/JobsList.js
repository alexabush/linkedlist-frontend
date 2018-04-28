import React, { Component } from 'react';
import Job from '../molecules/Job';

class JobsList extends Component {
  state = {};
  render() {
    const joblis = this.props.jobs.map(job => (
      <li>
        <Job job={job} />
      </li>
    ));
    return (
      <div>
        <ul>{joblis}</ul>
      </div>
    );
  }
}

export default JobsList;

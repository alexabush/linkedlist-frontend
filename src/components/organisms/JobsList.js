import React, { Component } from 'react';

class JobsList extends Component {
  state = {};
  render() {
    const joblis = this.props.jobs.map(job => <li>job.title</li>);
    return (
      <div>
        <ul>{joblis}</ul>
      </div>
    );
  }
}

export default JobsList;

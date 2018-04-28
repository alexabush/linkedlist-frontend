import React, { Component } from 'react';
import Navbar from '../../containers/Navbar';
import JobsList from '../organisms/JobsList';

class UserJobsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1>Jobs Feed</h1>
        <JobsList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default UserJobsFeed;

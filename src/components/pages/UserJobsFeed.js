import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../containers/Navbar';
import JobsList from '../organisms/JobsList';
import { setCurrentJob } from '../../store/actions/jobActionHandlers';

class UserJobsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  // async componentDidMount() {
  //   console.log('in componentDidMount');
  //   const jobsData = await axios.get(`http://localhost:8081/jobs`);
  //   console.log('jobsData', jobsData);
  //   debugger;
  //   // this.props.dispatch(jobsData.data.data);
  //   //i'll need to dispatch too
  // }

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

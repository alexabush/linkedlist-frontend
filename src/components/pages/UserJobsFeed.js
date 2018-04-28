import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

  async componentDidMount() {
    console.log('in componentDidMount');
    const jobsData = await axios.get(`http://localhost:8081/jobs`);
    console.log('jobsData', jobsData.data.data);
    // debugger;
    this.props.dispatch(setCurrentJob(jobsData.data.data));
    //i'll need to dispatch too
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

function mapStateToProps(reduxState) {
  console.log('in UserJobsFeed mapStateToProps');
  return {
    jobs: reduxState.jobs
  };
}

export default connect(mapStateToProps)(UserJobsFeed);

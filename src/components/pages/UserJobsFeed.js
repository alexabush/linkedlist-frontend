import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from '../../containers/Navbar';
import JobsList from '../organisms/JobsList';
import { setCurrentJobs } from '../../store/actions/jobActionHandlers';

class UserJobsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  async componentDidMount() {
    console.log('in componentDidMount');
    debugger;
    const jobsData = await axios.get(`http://localhost:8081/jobs`);
    // console.log('jobsData', jobsData.data.data);
    this.props.dispatch(setCurrentJobs(jobsData.data.data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('in getDerivedStateFromProps');
    debugger;
    return {
      jobs: nextProps.jobs
    };
  }

  render() {
    console.log('in UserJobsFeed render');
    console.log('this.props.jobs', this.props.jobs);
    debugger;
    return (
      <div>
        <Navbar />
        <h1>Jobs Feed</h1>
        <JobsList jobs={this.props.jobs} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log('in UserJobsFeed mapStateToProps');
  console.log(reduxState.currentJobs);
  debugger;
  return {
    jobs: reduxState.currentJobs
  };
}

export default connect(mapStateToProps)(UserJobsFeed);

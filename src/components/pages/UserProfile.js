import React, { Component } from 'react';
import ExperienceList from '../organisms/ExperienceList';
import EducationList from '../organisms/EducationList';
import SkillsList from '../organisms/SkillsList';
import Navbar from '../../containers/Navbar';
import UserCard from '../../components/UserCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import { setCurrentUser } from '../../store/actions/auth';
import { apiCall } from '../../services/api';

const UserProfileStyle = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
`;

class UserProfile extends Component {
  async componentDidMount() {
    console.log('in componentDidMount');
    debugger;
    // const userData = await apiCall('GET', 'localhost:8081/users/mrIrons', {});
    const userData = await axios.get(
      `http://localhost:8081/users/${this.props.user.username}`
    );
    debugger;
    this.props.dispatch(setCurrentUser(userData.data.data));
    debugger;
  }

  render() {
    console.log('in UserProfile');
    console.log('props', this.props.user);
    // debugger;
    return (
      <UserProfileStyle>
        <Navbar
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
        <h1>User Profile</h1>
        <UserCard
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
        <ExperienceList
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
        <EducationList
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
        <SkillsList
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
      </UserProfileStyle>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log('in UserProfile mapStateToProps');
  // debugger;
  return {
    isAuthenticated: reduxState.currentUser.isAuthenticated,
    user: reduxState.currentUser.user
  };
}

export default connect(mapStateToProps)(UserProfile);

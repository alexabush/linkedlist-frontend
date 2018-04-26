import React, { Component } from 'react';
import ListWrapper from '../ListWrapper';
import Navbar from '../../containers/Navbar';
import UserCard from '../../components/UserCard';
import styled from 'styled-components';
import { connect } from 'react-redux';

const UserProfileStyle = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
`;

class UserProfile extends Component {
  state = {};
  render() {
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
        <ListWrapper
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
        <ListWrapper
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
        />
      </UserProfileStyle>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    isAuthenticated: reduxState.isAuthenticated,
    user: reduxState.user
  };
}

export default connect(mapStateToProps)(UserProfile);

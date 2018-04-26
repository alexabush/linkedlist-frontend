import React, { Component } from 'react';
import ListWrapper from './ListWrapper';
import Navbar from '../containers/Navbar';
import UserCard from '../components/UserCard';
import styled from 'styled-components';

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
        <Navbar />
        <h1>User Profile</h1>
        <UserCard />
        <ListWrapper />
        <ListWrapper />
      </UserProfileStyle>
    );
  }
}

export default UserProfile;

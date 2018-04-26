import React, { Component } from 'react';
import ListWrapper from './ListWrapper';
import Navbar from '../containers/Navbar';
import styled from 'styled-components';
import UserCard from '../components/UserCard';

const UserProfileStyle = styled.div`
  height: 300px;
  width: 400px;
  background-color: lightgray;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class UserProfile extends Component {
  state = {};
  render() {
    return (
      <UserProfileStyle>
        <Navbar />
        <h1>User Feed</h1>
        <UserCard />
        <ListWrapper />
      </UserProfileStyle>
    );
  }
}

export default UserProfile;

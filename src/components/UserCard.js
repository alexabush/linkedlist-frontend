import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserCardStyle = styled.div`
  height: 200px;
  width: 90%;
  background-color: lightblue;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class UserCard extends Component {
  //everything can be broken into atoms!
  state = {};
  render() {
    console.log('in UserCard');
    debugger;
    return (
      <UserCardStyle>
        <div>
          <div>
            <li>Message</li>
          </div>
          <div>Connect</div>
        </div>
        <div>
          <h1>User Name {this.props.user.username}</h1>
          <div>
            <div>Current Job Title</div>
            <div>Current Job</div>
          </div>
        </div>
      </UserCardStyle>
    );
  }
}

export default UserCard;

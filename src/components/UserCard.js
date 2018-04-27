import React, { Component } from 'react';
import styled from 'styled-components';

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
    console.log('current user data: ', this.props);
    return (
      <UserCardStyle>
        <div>
          <div>
            <li>Message</li>
          </div>
          <div>Connect</div>
        </div>
        <div>
          <h1>
            {this.props.user.firstName} {this.props.user.lastName}
          </h1>
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

import React, { Component } from 'react';
import styled from 'styled-components';

const UserCardStyle = styled.div`
  // height: 300px;
  width: 90%;
  background-color: white;
  border: 1px solid black
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  // align-items: center;
`;

const ButtonStyle = styled.div`
  // background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageButton = () => (
  <ButtonStyle>
    <img src="" alt="" />
    <p>Message</p>
  </ButtonStyle>
);

const ConnectButton = () => (
  <ButtonStyle>
    <img src="" alt="" />
    <p>Connected</p>
  </ButtonStyle>
);

const ImageStyle = styled.div`
  border-radius: 5px;
  // background-color: red;
  // border: 20px solid purple;
  max-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // object-fit: contain;
`;

const UserPhoto = ({ user }) => (
  <ImageStyle>
    <img
      style={{
        objectFit: 'contain',
        // border: '10px solid green',
        maxHeight: '100px'
      }}
      src={user.photo}
      alt="User Photo"
    />
  </ImageStyle>
);

class UserCard extends Component {
  //everything can be broken into atoms!
  state = {};
  render() {
    console.log('in UserCard');
    console.log('current user data: ', this.props);
    return (
      <UserCardStyle>
        <MessageButton />
        {/* <ConnectButton /> */}
        <div>
          <UserPhoto user={this.props.user} />
          <h1>
            {this.props.user.firstName} {this.props.user.lastName}
          </h1>
          <div>
            <div>
              {this.props.user.experience &&
                this.props.user.experience[0].jobTitle}{' '}
              @{this.props.user.experience &&
                this.props.user.experience[0].companyName}
            </div>
          </div>
        </div>
        <ConnectButton />
      </UserCardStyle>
    );
  }
}

export default UserCard;

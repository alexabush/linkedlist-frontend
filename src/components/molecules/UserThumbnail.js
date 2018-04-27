import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserThumbnailStyle = styled.div`
  background-color: rgb(113,135,145)
  height: 50px;
  width: 100px;
  // padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: white
`;

const LinkStyle = styled.li`
  text-decoration: none; /* no underline */
  color: white;
`;

// const LogoutButton = () => (
//   <a href=""></a>
// )

class UserThumbnail extends Component {
  state = {};
  render() {
    return (
      <UserThumbnailStyle>
        <img src="" alt="ProfilePic" />
        <p>{this.props.currentUser.user.username}</p>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <a href="/logout" onClick={this.props.logoutUser}>
                Log out
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        )}
      </UserThumbnailStyle>
    );
  }
}

export default UserThumbnail;

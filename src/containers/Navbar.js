import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import SearchBar from '../components/molecules/SearchBar';
import UserThumbnail from '../components/molecules/UserThumbnail';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  // border: 10px solid blue;
  background-color: rgb(29, 49, 58);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

class Navbar extends Component {
  logoutUser = e => {
    console.log('in logout');
    e.preventDefault();
    /*from auth,
    clears localStorate
    removes Authorization header
    sends dispatch to set the current user to an empty object
    */
    this.props.logout();
  };

  render() {
    return (
      <NavBarStyle>
        <SearchBar />
        <UserThumbnail
          logout={this.logoutUser}
          currentUser={this.props.currentUser}
        />
      </NavBarStyle>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Navbar);

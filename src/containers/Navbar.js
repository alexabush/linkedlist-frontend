import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

class Navbar extends Component {
  logout = e => {
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
        <div>Search Bar</div>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <a href="/logout" onClick={this.logout}>
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
        <div>
          <img src="" alt="" />
          <p>{this.props.user.firstName}</p>
        </div>
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

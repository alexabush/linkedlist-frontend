import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
  console.log('rendering homepage');
  if (!currentUser.isAuthenticated) {
    //change this so it redirects to the homepage?
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <h2>This is the home page</h2>
        <Link to="/signup">Sign up here</Link>
      </div>
    );
  }
  return <h1>You are logged in!</h1>;
};

Homepage.propTypes = {
  currentUser: PropTypes.object
};

export default Homepage;

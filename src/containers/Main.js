import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { removeError } from '../store/actions/errors';
import { authUser, loginUser } from '../store/actions/auth';
import Homepage from '../components/Homepage';
// import AuthForm from '../components/AuthForm';
import withAuth from '../hocs/withAuth';
import ListWrapper from '../components/ListWrapper';
import UserProfile from '../components/pages/UserProfile';
import UserJobsFeed from '../components/pages/UserJobsFeed';

import FormWrapper from '../components/FormWrapper';

const Main = props => {
  console.log('in Main component');
  const { authUser, currentUser, errors, removeError, loginUser } = props;
  console.log(
    'Props for Main',
    authUser,
    currentUser,
    errors,
    removeError,
    loginUser
  );
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/signin"
          render={props => {
            console.log('in /signin switch');
            if (currentUser.isAuthenticated) {
              return <Redirect to="/" />;
            }
            return (
              <FormWrapper
                targetForm="AuthForm"
                buttonText="Log in"
                errors={errors}
                removeError={removeError}
                heading="Welcome Back."
                onAuth={loginUser}
                signIn
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            console.log('in /signup switch');
            if (currentUser.isAuthenticated) {
              return <Redirect to="/" />;
            }
            return (
              <FormWrapper
                removeError={removeError}
                buttonText="Sign up"
                errors={errors}
                heading="New User Form"
                onAuth={authUser}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/secret"
          //withAuth makes protected routes
          component={withAuth(() => {
            console.log('in /secret switch');
            return <h1>Secret Page!</h1>;
          })}
        />
        <Route
          exact
          path="/"
          render={props => {
            console.log('in / switch');
            if (!currentUser.isAuthenticated) {
              return <Redirect to="/signin" />;
            } else {
              return <UserProfile />;
              // return <ListWrapper />;
              // return <h1>You're logged in! Cool.</h1>;
            }

            // return <Homepage {...props} currentUser={currentUser} />;
          }}
        />
        <Route
          exact
          path="/jobs"
          render={props => {
            console.log('in /jobs route');
            return <UserJobsFeed />;
          }}
          //do i need auth for this route?
          // if (!currentUser.isAuthenticated) {
          //   return <Redirect to="/signin" />;
          // } else {
          // return <UserJobsFeed />;
          // return <ListWrapper />;
          // return <h1>You're logged in! Cool.</h1>;
          // }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};

Main.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  authUser: PropTypes.func,
  loginUser: PropTypes.func,
  currentUser: PropTypes.object,
  removeError: PropTypes.func,
  errors: PropTypes.object
};

export default withRouter(
  //place action creators onto props
  connect(mapStateToProps, { loginUser, authUser, removeError })(Main)
);

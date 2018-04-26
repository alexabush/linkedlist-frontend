import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { removeError } from '../store/actions/errors';
import { authUser, loginUser } from '../store/actions/auth';
import Homepage from '../components/Homepage';
// import AuthForm from '../components/AuthForm';
import withAuth from '../hocs/withAuth';

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
            return <Redirect to="/signin" />;
            // return <Homepage {...props} currentUser={currentUser} />;
          }}
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

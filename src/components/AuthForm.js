import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  }

  handleSubmit = e => {
    // debugger;
    // console.log(this.state);
    console.log('entering handle submit');
    e.preventDefault();
    //we use the same form for signin and signup
    const authType = this.props.signIn ? 'signin' : 'signup';
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        // we failed to log in, display the error message
        console.log('in AuthForm handleSubmit; login failed!');
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // debugger;
    console.log('in auth form render');
    const { email, username, password, firstName, lastName } = this.state;
    const {
      signIn,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;
    //what does this do? listening for a change in a route
    history.listen(() => {
      console.log('in history listen', errors);
      removeError(); // if the error property is null in redux don't do this - store.getState() // errors.message =
    });
    // debugger;
    //what does this do?
    history.listen(() => {
      console.log('in history.listen');
      removeError();
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && <div>{errors.message}</div>}
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              onChange={this.handleChange}
              type="text"
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password}
            />
          </div>
          {!signIn && (
            <div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  type="text"
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  onChange={this.handleChange}
                  type="text"
                  value={firstName}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  onChange={this.handleChange}
                  type="text"
                  value={lastName}
                />
              </div>
            </div>
          )}
          <button type="submit">{buttonText}</button>
          {signIn && <Link to="/signup">Sign up</Link>}
        </form>
      </div>
    );
  }
}
AuthForm.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};

export default AuthForm;

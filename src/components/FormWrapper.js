import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';

// const FormWrapper = ({ propThatImLookingFor, ...props }) => (
const FormWrapper = props => (
  <div>
    <div>
      <img src="" alt="" />
      <h1>YAY LinkedList</h1>
    </div>
    <AuthForm {...props} />
  </div>
);

export default FormWrapper;

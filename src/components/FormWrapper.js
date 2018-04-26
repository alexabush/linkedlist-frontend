import React, { Component } from 'react';
import styled from 'styled-components';
import AuthForm from '../components/AuthForm';
// import StyledFormCard from './StyledFormCard';

// const FormWrapper = ({ propThatImLookingFor, ...props }) => (
const StyledFormCard = styled.div`
  height: 300px;
  width: 400px;
  background-color: lightgray;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = props => (
  <StyledFormCard>
    <div>
      <img src="" alt="" />
      <h1>YAY LinkedList</h1>
    </div>
    <AuthForm {...props} />
  </StyledFormCard>
);

// export default StyledFormCard;

export default FormWrapper;

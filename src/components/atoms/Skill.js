import React, { Component } from 'react';
import styled from 'styled-components';

const RoundedDiv = styled.div`
  border-radius: 5px;
  background-color: lightgray;
  padding: 5px;
`;

class Skill extends Component {
  state = {};
  render() {
    return (
      <RoundedDiv>
        <p>{this.props.name}</p>
      </RoundedDiv>
    );
  }
}

export default Skill;

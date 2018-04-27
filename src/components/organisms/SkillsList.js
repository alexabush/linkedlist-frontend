import React, { Component } from 'react';
import Skill from '../molecules/Skill';
import styled from 'styled-components';

const ListStyle = styled.ul`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  // width: 90%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

class SkillsList extends Component {
  state = {};
  render() {
    console.log('in SkillsList');
    let skillLis;
    if (this.props.user.skills) {
      skillLis = this.props.user.skills.map(skill => (
        <li>
          <Skill name={skill} />
        </li>
      ));
    }
    return (
      <ListStyle>
        <h2>Skills</h2>
        <StyledUl>{skillLis}</StyledUl>
      </ListStyle>
    );
    // {skillLis ? (
    //   ) : (
    //     <ul>Loading...</ul>
    //   )}
  }
}

export default SkillsList;

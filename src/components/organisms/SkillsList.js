import React, { Component } from 'react';
import Skill from './Skill';

class SkillsList extends Component {
  state = {};
  render() {
    const skillLis = this.props.skills.map(skill => (
      <li>
        <Skill name={skill} />
      </li>
    ));
    return <ul>{skillLis}</ul>;
  }
}

export default SkillsList;

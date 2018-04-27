import React, { Component } from 'react';
import Skill from '../atoms/Skill';

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
    return skillLis ? <ul>{skillLis}</ul> : <ul>Loading...</ul>;
  }
}

export default SkillsList;

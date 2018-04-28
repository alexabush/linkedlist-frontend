import React, { Component } from 'react';
import Experience from '../molecules/Experience';
import styled from 'styled-components';
import ExperienceEditForm from './ExperienceEditForm';

const ListStyle = styled.div`
  width: 90%;
  background-color: white;
  // background-color: lightpink;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ExperienceList extends Component {
  state = {};
  render() {
    console.log('in experience list', this.props.user.experience);
    let listItems;
    // if (this.props.user.experience) {
    if (!this.props.isEditExperience) {
      listItems = this.props.user.experience.map(item => (
        <li>
          <Experience
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        </li>
      ));
    } else {
      listItems = this.props.user.experience.map(item => (
        <li>
          <ExperienceEditForm
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            startDate={item.startDate}
            endDate={item.endDate}
            updateUserExperience={this.props.updateUserExperience}
          />
        </li>
      ));
    }
    return (
      <ListStyle>
        <button onClick={this.props.toggleEditExperience}>Edit</button>
        <h2>Experience</h2>
        <ul style={{ listStyleType: 'none' }}>{listItems}</ul>
      </ListStyle>
    );
  }
}

export default ExperienceList;

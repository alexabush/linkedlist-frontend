import React, { Component } from 'react';
import styled from 'styled-components';
import Education from '../molecules/Education';
import EducationEditForm from '../organisms/EducationEditForm';

const ListStyle = styled.div`
  width: 90%;
  background-color: white;
  // background-color: lightpink;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class EducationList extends Component {
  state = {};
  render() {
    console.log('in experience list', this.props.user.experience);
    //we need to pass in the array of jobs
    let listItems;
    if (!this.props.isEditEducation) {
      listItems = this.props.user.education.map(item => (
        <li>
          <Education
            degree={item.degree}
            institution={item.institution}
            endDate={item.endDate}
          />
        </li>
      ));
    } else {
      listItems = this.props.user.education.map(item => (
        <li>
          <EducationEditForm
            degree={item.degree}
            institution={item.institution}
            endDate={item.endDate}
            updateUserEducation={this.props.updateUserEducation}
          />
        </li>
      ));
    }
    return (
      <ListStyle>
        <div>
          <img src="" alt="" />
          <h2>Education</h2>
        </div>
        <button onClick={this.props.toggleEditEducation}>Edit</button>
        <ul>{listItems}</ul>
      </ListStyle>
    );
  }
}

export default EducationList;

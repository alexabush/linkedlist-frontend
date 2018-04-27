import React, { Component } from 'react';
import Experience from '../molecules/Experience';
import styled from 'styled-components';

const ListStyle = styled.div`
  width: 90%;
  background-color: white;
  // background-color: lightpink;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;g
`;

class ExperienceList extends Component {
  state = {};
  render() {
    // debugger;
    console.log('in experience list', this.props.user.experience);
    let listItems;
    if (this.props.user.experience) {
      debugger;
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
    }
    return (
      <ListStyle>
        <button onClick={this.props.toggleEdit}>Edit</button>
        <h2>Experience</h2>
        <ul style={{ listStyleType: 'none' }}>{listItems}</ul>
      </ListStyle>
    );
  }
}

export default ExperienceList;

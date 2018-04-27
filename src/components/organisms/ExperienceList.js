import React, { Component } from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
  width: 90%;
  background-color: lightpink;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ExperienceList extends Component {
  state = {};
  render() {
    //we need to pass in the array of jobs
    let listItems;
    if (this.props.experience) {
      listItems = this.props.experience.map(item => {
        <li>This is a component</li>;
      });
    }
    return (
      <ListStyle>
        <div>
          <img src="" alt="" />
          <h2>
            {this.props.listType && this.props.listType}This is the list type
          </h2>
        </div>
        <button>Edit</button>
        <ul>{listItems}</ul>
      </ListStyle>
    );
  }
}

export default ExperienceList;

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
    debugger;
    let listItems;
    if (this.props.user.experience) {
      listItems = this.props.user.experience.map(item => {
        <li>{item}</li>;
      });
    }
    return (
      <ListStyle>
        <div>
          <img src="" alt="" />
          <h2>{this.props.user.experience}</h2>
        </div>
        <button>Edit</button>
        <ul>{listItems}</ul>
      </ListStyle>
    );
  }
}

export default ExperienceList;

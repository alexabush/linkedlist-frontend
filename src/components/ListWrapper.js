import React, { Component } from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
  height: 300px;
  width: 400px;
  background-color: green;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ListWrapper extends Component {
  state = {};
  render() {
    let listItems;
    if (this.props.listItems) {
      listItems = this.props.listItems.map(item => {
        <li>
          {this.props.component && this.props.component}
          This is a component
        </li>;
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

export default ListWrapper;

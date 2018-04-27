import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarStyle = styled.div`
  width: 100%;
`;

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <SearchBarStyle>
        <img src="" alt="LL" />
        <input type="text" placeholder="Search for People or Companies..." />
        <input type="submit" value="Search" />
      </SearchBarStyle>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import '../css/search.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="search-container">
        <i className="material-icons">search</i>
        <input type='text'></input>
      </div>
    );
  }
}

export default SearchBox;
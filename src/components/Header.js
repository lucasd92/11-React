import React, { Component } from 'react';
//import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <i className="material-icons">arrow_back</i>
        <p>
          {this.props.res.title}
        </p>
      </header>
    );
  }
}

export default Header;

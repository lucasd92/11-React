import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/">
                <i className="material-icons">arrow_back</i>
        </Link>
        <p>
          {this.props.res.title}
        </p>
      </header>
    );
  }
}

export default Header;

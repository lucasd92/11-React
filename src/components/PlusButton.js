import React, { Component } from 'react';
//import './App.css';

class PlusButton extends Component {
  render() {
    return (
      <button onClick={this.props.showAddForm}>
        <i className="material-icons">add_circle</i>
      </button>
    );
  }
}

export default PlusButton;
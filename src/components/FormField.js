import React, { Component } from 'react';
//import './App.css';

class FormField extends Component {

  onChange = (e) => {
    this.props.onChange(this.props.index,e.target.value);
  }
  validateInput = (e) => {
    this.props.validateInput(this.props.index,this.props.field.pattern,e.target.value)
  }
  clearError = (e) => {
    this.props.clearError(this.props.index);
  }
  render() {
    return (
      <div>
        <label>{this.props.field.name}</label>
        <input 
          type={this.props.field.type} 
          name={this.props.field.id}  
          placeholder="Set Value"
          value={this.props.state.value}
          onChange={this.onChange}
          onFocus={this.clearError}
          onBlur={this.validateInput}
        />
        {this.props.state.errorMsg && <p>{this.props.field.onError}</p>}
      </div>
    );
  }
}

export default FormField;
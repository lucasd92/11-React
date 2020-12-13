import React, { Component } from 'react';
//import './App.css';

class FormField extends Component {
  state = {
    value:'',
    errorMsg: false,
    valid: false
  }

  onChange = (e) => this.setState({value: e.target.value});
  clearError = (e) => this.setState({errorMsg: false, valid: false});
  validateInput = (e) => {
    if(!this.props.field.pattern.test(e.target.value))
      this.setState({errorMsg: true});
    else
      this.setState({valid: true});
  }
  render() {
    return (
      <div>
        <label>{this.props.field.name}</label>
        <input 
          type={this.props.field.type} 
          name={this.props.field.id}  
          placeholder="Add name"
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.clearError}
          onBlur={this.validateInput}
        />
        {this.state.errorMsg && <p>{this.props.field.onError}</p>}
      </div>
    );
  }
}

export default FormField;
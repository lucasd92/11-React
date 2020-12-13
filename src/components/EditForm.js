import React, { Component } from 'react';
import FormField from './FormField'
//import './App.css';

class EditForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.showForm();
  }
  render() {
    let inputs = [];
    this.props.res.fields.forEach(field => {
      inputs.push(<FormField field = {field} key = {field.id} />);
    });
    return (
      <div>
        <div>
          <p>{this.props.res.title}</p>
          <button onClick={this.props.showForm} >X</button>
        </div>
      <form onSubmit={this.onSubmit}>
        {inputs}
        <input type="submit" value="Confirm"/>
      </form>
      </div>
    );
  }
}

export default EditForm;
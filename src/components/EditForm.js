import React, { Component } from 'react';
import FormField from './FormField'
import { Link } from 'react-router-dom';
import '../css/form.css';

class EditForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    let inputs = [];
    this.props.res.fields.forEach(field => {
      inputs.push(<FormField value={this.props.data} field = {field} key = {field.id} />);
    });
    return (
      <React.Fragment>
        <div className="form-header">
          <p>{this.props.res.title}</p>
          <Link to="/">X</Link>
        </div>
        <form onSubmit={this.onSubmit}>
          {inputs}
          <Link className="submit-container" to="/">
            <input type="submit" value="Confirm"/>
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

export default EditForm;
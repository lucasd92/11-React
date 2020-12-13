import React, { Component } from 'react';
import TableRow from './TableRow'
//import './App.css';
class TableFrame extends Component {
  render() {
    let head = [];
    this.props.res.fields.forEach((field, index) => {
      head.push( <th key = {index}>{field}</th> );
    });
    let rows = [];
    this.props.data.forEach(element => {
      rows.push(<TableRow data = {element} fields = {this.props.res.fields} key = {element.id} delRes = {this.props.delRes} editRes = {this.props.editRes}/>);
    });
    return (
      <table>
        <thead>
          <tr>
            {head}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default TableFrame;

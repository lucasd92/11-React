import React, { Component } from 'react';
//import './App.css';

class TableRow extends Component {
  render() {
    let i = 0;
    let rowContent = [];
      for (var key in this.props.data){
          if(key !== 'id')
            rowContent.push(<td key = {i}>{this.props.data[key]}</td>);
          i++;
      }
    rowContent.push(          
      <td key = {i}>
        <button onClick = {this.props.editRes.bind(this,this.props.data.id)}><i className="material-icons">create</i></button>
        <button onClick = {this.props.delRes.bind(this,this.props.data.id)}><i className="material-icons">delete</i></button>  
      </td>);
    return (
        <tr>
          {rowContent}
        </tr>
    );
  }
}

export default TableRow;
import React, { Component } from 'react';
//import './App.css';
import TableFrame from './TableFrame'
import SearchBox from './SearchBox'
import PlusButton from './PlusButton'
import EditForm from './EditForm'

class Card extends Component {
  render() {
    return (
      <div>
        {this.props.views.tableView && <SearchBox />}
        {this.props.views.tableView && <TableFrame data = {this.props.data} res = {this.props.res} delRes = {this.props.delRes} editRes = {this.props.editRes}/>} 
        {this.props.views.tableView && <PlusButton showAddForm={this.props.showAddForm}/>}
        {this.props.views.addFormView &&<EditForm res = {this.props.res.addForm} showForm={this.props.showAddForm}/>}
        {this.props.views.editFormView &&<EditForm res = {this.props.res.editForm} showForm={this.props.showEditForm}/>}
      </div>
    );
  }
}

export default Card;
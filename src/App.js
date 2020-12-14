import React, { Component } from 'react';
import './App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import technicians from './mocks/technicians';
import TableFrame from './components/TableFrame'
import SearchBox from './components/SearchBox'
import PlusButton from './components/PlusButton'
import EditForm from './components/EditForm'


class App extends Component {
  resources = technicians;
  state = {
    resources: 
    [
      {
        id: 1,
        title: 'Technicians',
        data: technicians,
        fields: 
          [
            'Rol',
            'Email',
            'Full Name',
            'Phone',
            'Address',
            'Boilers',
            'Capabilities',
            'Hour Rate',
            'Daily Capacity',
            'Actions'
          ],
          editForm:
          {
            title: 'Edit technician',
            fields: 
            [ 
              {id:'rol',type: 'text', name:'Rol', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
              {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
              {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
              {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'hour_rate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'daily_capacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
            ]
          },
          addForm:
          {
            title: 'Add new technician',
            fields: 
            [ 
              {id:'rol',type: 'text', name:'Rol', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
              {id:'name',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
              {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
              {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'hourrate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'daylycapacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
            ]
          } 
      },
      {
        id: 2,
        title: 'Boilers',
      }
    ]
  }
  delRes = (id) => {
    const len = this.resources.length;
    this.resources = this.resources.filter((res) => (res.id !== parseInt(id)) );
    if(this.resources.length < len) this.forceUpdate();
  }
  editRes = (id) => {
    console.log(id);
    this.showEditForm();
  }
  render() {
    return (
      <Router>
        <div>
          <Header res = {this.state.resources[0]}/>
          <div className="card">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <SearchBox />
                <TableFrame data = {this.resources} res = {this.state.resources[0]} delRes = {this.delRes} editRes = {this.editRes}/>
                <PlusButton showAddForm={this.showAddForm}/>
              </React.Fragment>
            )} />
            <Route exact path="/add" render={props => (
              <EditForm res = {this.state.resources[0].addForm} showForm={this.showAddForm}/>
            )} />
            <Route exact path="/edit/:id" render={props => (
              <EditForm data={this.resources.filter((res) => (res.id === parseInt(props.match.params.id)) )} res = {this.state.resources[0].editForm} showForm={this.showEditForm}/>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

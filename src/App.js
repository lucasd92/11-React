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
          [//Order matters
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
              {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
              {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
              {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'boiler',type: 'text', name:'Boilers', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
              {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
              {id:'hour_rate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'daily_capacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
            ]
          },
          addForm:
          {
            title: 'Add new technician' ,
            fields:
            [
              {id:'rol',type: 'text', name:'Rol', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
              {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
              {id:'fullname',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
              {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              {id:'address',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'boiler',type: 'text', name:'Boilers', onError:'Must have at least 1 characters', pattern: /^[a-z;,]{1,}$/i},
              {id:'capabilities',type: 'text', name:'Capabilities', onError:'Must have at least 3 characters', pattern: /^[a-z]{1,}$/i},
              {id:'hour_rate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'daily_capacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
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
  editRes = (id,fields) => {
    if(id === -1){
      let newRes = {};
      fields.forEach( (field) => {
        newRes[field.id] = field.value;
      });
      newRes['id'] = Math.round(100000 * Math.random());
      this.resources.push(newRes);
    }
    else{
      this.resources.forEach((res) => {
        if(res.id === id){
          fields.forEach( (field) => {
            res[field.id] = field.value;
          });
        }
      })
    }
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
                <PlusButton />
              </React.Fragment>
            )} />
            <Route exact path="/add" render={props => (
              <EditForm
                res = {this.state.resources[0].addForm}
                editRes={this.editRes}
              />
            )} />
            <Route exact path="/edit/:id" render={props => (
              <EditForm
                data={this.resources.filter((res) => (res.id === parseInt(props.match.params.id)) )}
                res={this.state.resources[0].editForm}
                editRes={this.editRes}
              />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

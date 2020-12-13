import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import technicians from './mocks/technicians';

class App extends Component {
  resources = technicians;
  state = {
    views:
      {
        tableView: true,
        editFormView: false,
        addFormView: false,
        deletePopUpView: false
      },
    resources: 
    [
      {
        id: 1,
        title: 'Technicians',
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
              {id:'name',type: 'text', name:'Full Name', onError:'At least 6 characters. Ex: John Doe', pattern: /^([a-z]{2,}[\s]+)+([a-z]{2,})$/i},
              {id:'email',type: 'email', name:'Email', onError:'Invalid email', pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},
              {id:'phone',type: 'number', name:'Phone Number', onError:'Must have at least 8 digits', pattern: /^[0-9]{8,}$/},
              {id:'addr',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'city',type: 'text', name:'City', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
              {id:'hourrate',type: 'number', name:'Hour Rate', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
              {id:'daylycapacity',type: 'number', name:'Daily Capacity', onError:'Must have at least 1 digits', pattern: /^[0-9]{1,}$/},
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
              {id:'addr',type: 'text', name:'Address', onError:'Must have at least 5 characters with numbers and letters', pattern: /^([a-z0-9]{2,}[\s]+)+([0-9]+)$/i},
              {id:'city',type: 'text', name:'City', onError:'Must have at least 3 characters', pattern: /^[a-z]{3,}$/i},
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
  showAddForm = () => {
    this.setState({ views: {tableView: !this.state.views.tableView, addFormView: !this.state.views.addFormView }});
  }
  showEditForm = () => {
    this.setState({ views: {tableView: !this.state.views.tableView, editFormView: !this.state.views.editFormView }});
  }
  render() {
    return (
      <div>
        <Header res = {this.state.resources[0]}/>
        <Card data={this.resources}
              res={this.state.resources[0]}
              views={this.state.views}
              delRes={this.delRes}
              editRes={this.editRes}
              showAddForm={this.showAddForm}
              showEditForm={this.showEditForm}
        />  
      </div>
    );
  }
}

export default App;

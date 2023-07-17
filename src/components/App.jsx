import { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';




export class App extends Component {
  state = {
      contacts: [],
      filter: ''
    };
  

 
  handleSubmit(state) {

    
   
    const id = nanoid()    
    const {name, number} = state
    const newContact = {name, number, id}
    
    this.setState({contacts: [...this.state.contacts, newContact]})
   
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(name));
    this.setState(
      {filter: filteredContacts}
    )
    
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  }));
  }



  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          handleChange={this.handleChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );  
  }
};


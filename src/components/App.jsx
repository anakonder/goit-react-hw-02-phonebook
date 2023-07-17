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
    const { name, number } = state
    
    const { contacts } = this.state
    // console.log("aur contacts",contacts)
    if (Boolean(contacts.find(contact => contact.name === name))) {
      alert(`${name} is already in contacts`)
      return
    }

    const newContact = {name, number, id}
    
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact]
    }));
   
  }

  handleFilterChange = (event) => {
    const name = event.target.value.toLowerCase()
    // const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(name));
    this.setState(
      {filter: name}
    )
    
  }

  filterContacts(filter) {
    if (filter === "") {
      return  this.state.contacts
    } else {
      return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
    }
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
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          filterContacts={() => this.filterContacts(this.state.filter)}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );  
  }
};


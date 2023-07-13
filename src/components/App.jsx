import { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';




export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      filter: ''
    };
  }

 
  handleSubmit = (event) => {
    event.preventDefault()
    const target = event.currentTarget
    const name = target.elements.name.value
    const number = target.elements.number.value
    const id = nanoid()

    
    const { contacts } = this.state
    const newContact = { name, number, id }
    
    const isContact = contacts.find((contact) => contact.name === name)
    if (Boolean(isContact)) {
      alert(`${name} is already in contacts`)
      return
    }
    
    
    
    this.setState({contacts: [...contacts, newContact]})

    target.elements.name.value = '';
    target.elements.number.value = '';
    
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
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
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


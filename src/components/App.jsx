import { Component } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';




export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      name: ''
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
    
    this.setState({contacts: [...contacts, newContact]})
    
    target.elements.name.value = '';
    target.elements.number.value = '';
    
  }

  handleChange = (event) => {
    const name = event.target.value
    this.setState(
      {name}
    )
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
        <ContactList
          contacts={this.state.contacts}
        />
      </div>
    );  
  }
};


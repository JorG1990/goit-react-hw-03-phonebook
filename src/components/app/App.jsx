
import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContacFrom from "../ContactFrom/ContactFrom";
import ContactList from "../ContacList/ContactList";
import Filter from "../Filter/Filter";
import { Section, TitlePhone, SectionContact, TitleContact } from "./App.styled";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const minusName = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === minusName
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts}) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const minusName = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(minusName));
  };

  deleteContact = contactId => {
    this.setState ( prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== contactId ),
    }));
  };

  viewfilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [ name ]: value });
  };

  componentDidUpdate (prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem ("contacts", JSON.stringify (contacts));
    };
  };

  render() {
    const { filter } = this.state;
    const viewContacts = this.filterContacts();

    return (
      <div>
        <Section title="Phoneboock">
          <TitlePhone>Phoneboock</TitlePhone>
          <ContacFrom onSumit = { this.viewfilter }/>
        </Section>
        <SectionContact title="Contacts">
          <TitleContact>Contacts</TitleContact>
          <Filter value = { filter } onChnge = { this.viewfilter }/>
          <ContactList
          contacts = { viewContacts }
          onDeleteContact = { this.deleteContact }
          />
        </SectionContact>
      </div>
    );
  };
};

export default App;

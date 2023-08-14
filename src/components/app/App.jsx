import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContacFrom from "../ContactFrom/ContactFrom";
import ContactList from "../ContacList/ContactList";
import Filter from "../Filter/Filter";
import { Section, TitlePhone, SectionContact, TitelContact } from ".//App.styled";


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

  filterContacts = () =>
}

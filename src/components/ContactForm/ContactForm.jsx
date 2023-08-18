
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Form, Input, Label, Button } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [ name ]: value });
  };

  submit = e => {
    e.preventDefault();
    this.props.onSumit(this.state);
    this.reset();
  };

  reset =  () => {
    this.setState ( { name: '', number:'' });
  };

  static propTypes = {
    onSumit: PropTypes.func.isRequired,
  };

  render () {
    const { name, number } = this.state;

    return (
      <Form onSumit={ this.submit }>
        <Label htmlFor={ this.nameId }>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.changeInput}
            placeholder=""
          />
        </Label>

        <Label htmlFor = { this.numberId }>
          Number
          <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.changeInput}
              placeholder=""
            />
        </Label>
        <Button type="Submit">Add contact</Button>
      </Form>
    );
  };
};

export default ContactForm;


import PropTypes from "prop-types";
import React, { Component } from "react";
import { ContactItem, Button } from "./Contact.styled";

class Contact extends Component {
  static propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handeleclick = () =>{
    const { id, onClick } =this.props;
    onClick (id);
  };

  render () {
    const { id, name, number } = this.props;
    return(
      <ContactItem key = { id }>
        <p> { name }: { number } </p>
        <Button type="button" onClick = { this.handeleclick }>Delete</Button>
      </ContactItem>
    );
  };
};

export default Contact;

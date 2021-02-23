import React from 'react';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends React.Component {
  state = {
    name: ' ',
    number: '',
  };
  inputId = uuidv4();
  handleInputChange = event => {
    const valueInput = event.currentTarget.name;
    this.setState({ [valueInput]: event.currentTarget.value.trimLeft() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;
    const findName = contacts.find(findContact => {
      return findContact.name === name;
    });

    if (findName) {
      alert(`${name} is already in the contacts`);
      this.reset();
    } else {
      addContact(name, number);
      this.reset();
    }
  };
  reset = () => {
    this.setState({
      name: ' ',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label htmlFor={this.inputId} className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              id={this.inputId}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
export default ContactForm;

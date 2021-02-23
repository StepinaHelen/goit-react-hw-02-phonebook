import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => (
    <li className={styles.listItem} key={id}>
      <p className={styles.name}>{name} </p>
      <p className={styles.number}>{number} </p>

      <button className={styles.delete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
};
export default ListItem;

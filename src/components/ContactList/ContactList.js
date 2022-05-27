import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-actions';
import { findContactsByQuery } from 'redux/contacts/contacts-selector';

export default function ContactList() {
  const contacts = useSelector(findContactsByQuery);
  const dispatch = useDispatch();

  const onDeleteClick = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <ContactItem
            contact={contact}
            key={contact.name}
            deleteContact={onDeleteClick}
          />
        );
      })}
    </ul>
  );
}

import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import transitionStyles from './transition.module.css';

import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { findContactsByQuery } from 'redux/contacts/contacts-selector';
// import { defaultContacts } from 'redux/contacts/contacts-selector';

export default function ContactList() {
  const contacts = useSelector(findContactsByQuery);

  // const defContacts = useSelector(defaultContacts);
  // const onDeleteClick = id => dispatch(deleteContact(id));

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition
          in={contacts.length > 0}
          key={contact.id}
          timeout={250}
          classNames={transitionStyles}
          unmountOnExit
        >
          <ContactItem key={contact.name} contact={contact} />
        </CSSTransition>
      ))}
      {/* {defContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact__item}>
          <span className={styles.contact__text}>
            {name}: {number}
          </span>
          <button className={styles.delete__btn} onClick={onDeleteClick}>
            Delete
          </button>
        </li>
      ))} */}
    </TransitionGroup>
  );
}

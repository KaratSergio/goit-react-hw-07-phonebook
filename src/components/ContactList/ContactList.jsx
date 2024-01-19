import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import * as selectors from '../../redux/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

import css from './ContactList.module.css';

const ContactInfo = ({ name, number }) => (
  <div className={css.contactInfo}>
    <div className={css.nameContainer}>
      <FontAwesomeIcon className={css.nameIcon} icon={faUser} />
      <span className={css.name}>{name}:</span>
    </div>
    <span>{number}</span>
  </div>
);

const ContactListItem = ({ contact, onDelete }) => (
  <li key={contact.id} className={css.item}>
    <ContactInfo name={contact.name} number={contact.number} />
    <button className={css.deleteButton} onClick={() => onDelete(contact)}>
      <FontAwesomeIcon icon={faTrash} />
      Delete
    </button>
  </li>
);

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);

  const userContacts = (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter ?? ''));

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <ul className={css.list}>
      {userContacts(contacts, filter).map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

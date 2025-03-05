import { ContactItem } from '../ContactItem/ContactItem';
import {
  ContactListContainer,
  ContactListHeading,
  ContactList,
} from './ContactListStyled.jsx';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectContacts,
  isLoading,
} from '../../redux/selectors.js';

export const ContactListComponent = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const isLoadingContacts = useSelector(isLoading);

  if (!isLoadingContacts) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <ClipLoader color="rgb(100, 199, 122)" size={50}></ClipLoader>
      </div>
    );
  }
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number.includes(filterValue)
  );

  return (
    <ContactListContainer>
      <ContactListHeading>Contacts:</ContactListHeading>
      <ContactList>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ContactList>
    </ContactListContainer>
  );
};
